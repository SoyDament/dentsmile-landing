CREATE TABLE IF NOT EXISTS "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"treatment" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
