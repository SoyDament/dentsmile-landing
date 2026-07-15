import { spawn } from 'node:child_process';
import path from 'node:path';

// Detectamos si el script se llamó para la base de datos en memoria
const isMemory = process.argv.includes('--memory');

// Buscamos la ruta absoluta al script del servidor de PGlite
const serverScript = path.resolve(
  'node_modules/@electric-sql/pglite-socket/dist/scripts/server.js',
);

const args = [serverScript, '-m', '100'];

if (!isMemory) {
  args.push('--db=local.db');
}

// Iniciamos el servidor de base de datos local
// Canalizamos la salida estándar (stdout) para poder leerla en tiempo real
const child = spawn('node', args, {
  stdio: ['inherit', 'pipe', 'inherit'],
  shell: false,
});

// Bandera para evitar ejecutar la migración múltiples veces
let migrationStarted = false;

child.stdout.on('data', (data) => {
  const output = data.toString();

  // Reenviamos la salida a tu terminal para que veas los logs del servidor
  process.stdout.write(output);

  // Cuando detectemos que PGlite está listo y escuchando en el puerto
  if (output.includes('PGLiteSocketServer listening') && !migrationStarted) {
    migrationStarted = true;
    console.log('\n=========================================');
    console.log('[Sistema] Base de datos activa. Iniciando migraciones...');
    console.log('=========================================\n');

    // Ejecutamos la migración de forma externa y segura usando la Shell de Windows
    const migrateCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const migrate = spawn(migrateCmd, ['run', 'db:migrate'], {
      stdio: 'inherit',
      shell: true,
    });

    migrate.on('close', (code) => {
      if (code === 0) {
        console.log('\n=========================================');
        console.log('[Sistema] ¡Migraciones aplicadas con éxito!');
        console.log('=========================================\n');
      } else {
        console.error(`\n[Sistema] Error en las migraciones. Código de salida: ${code}\n`);
      }
    });
  }
});

child.on('close', (code) => {
  process.exit(code ?? 0);
});
