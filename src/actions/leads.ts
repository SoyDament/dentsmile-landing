'use server';

import { z } from 'zod';
import { db } from '@/libs/DB';
import { leadsSchema } from '@/models/Schema';

const leadFormSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  phone: z.string().min(1, 'El teléfono es requerido'),
  treatment: z.string().min(1, 'El tratamiento es requerido'),
});

export async function createLead(formData: FormData) {
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    treatment: formData.get('treatment'),
  };

  const parsed = leadFormSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      fieldErrors[key] ??= [];
      fieldErrors[key].push(issue.message);
    }

    return {
      success: false,
      message: 'Datos inválidos',
      errors: fieldErrors,
    };
  }

  try {
    await db.insert(leadsSchema).values(parsed.data);
    return { success: true, message: '¡Gracias! Nos pondremos en contacto pronto.' };
  } catch (error) {
    console.error('Error saving lead:', error);
    return {
      success: false,
      message: 'Ocurrió un error al guardar los datos. Inténtalo de nuevo.',
    };
  }
}
