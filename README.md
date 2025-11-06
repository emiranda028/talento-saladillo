# Talento Saladillo — Starter

Plataforma local de recruiting (Next.js 15 + Tailwind + Supabase + Prisma).

## Deploy rápido (Vercel + Supabase)
1. **Crear proyecto Supabase** y agregar una base de datos Postgres.
2. Copiar la URL y ANON KEY a `.env` (ver `.env.example`):
   ```env
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   DATABASE_URL=postgresql://usuario:pass@host:6543/postgres
   APP_SECRET=GENERAR_UNO
   ```
3. **Migraciones Prisma** (local o en GitHub Actions):  
   - Local: `npm i` → `npx prisma generate` → `npx prisma migrate deploy`
4. **Seed (opcional)**: `npm run seed` (requiere `csv-parse`: `npm i csv-parse`).
5. **Conectar repo a Vercel** y setear las mismas variables de entorno.

## Scripts
- `npm run dev` — desarrollo local
- `npm run build && npm start` — producción
- `npm run prisma:migrate` — (si usás migraciones)
- `npm run seed` — carga datos demo

## Estructura
- `app/` — Rutas App Router
- `app/api/` — Endpoints API
- `lib/` — Clientes y utilidades
- `prisma/` — Esquema y seed
- `seed/` — CSV de ejemplo

## Notas
- Autenticación: por simplicidad, usamos **Supabase Auth** (email/OTP). Podés agregar Google/Facebook desde el panel de Supabase y el front con `@supabase/auth-ui` si querés un widget rápido.
- Entrevistas Zoom: para MVP podés generar enlaces manuales o integrar SDK/Server-to-Server para crear reuniones desde `/api`.
