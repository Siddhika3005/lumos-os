create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now() not null
);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'book-open'),
  ('TypeScript Systems Thinking', 42, 'code'),
  ('Applied Systems Design', 88, 'layers'),
  ('Machine Learning Foundations', 63, 'cpu');
