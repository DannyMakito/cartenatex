import dotenv from 'dotenv';

dotenv.config();

const required = (name: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const config = {
  port: Number(process.env.PORT) || 4000,
  supabaseUrl: required('SUPABASE_URL', process.env.SUPABASE_URL),
  supabaseServiceRoleKey: required(
    'SUPABASE_SERVICE_ROLE_KEY',
    process.env.SUPABASE_SERVICE_ROLE_KEY
  ),
  frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://localhost:3000',
  adminApiKey: required('ADMIN_API_KEY', process.env.ADMIN_API_KEY),
};


