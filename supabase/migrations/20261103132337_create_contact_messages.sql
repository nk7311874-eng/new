/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, 1-100 chars)
  - `email` (text, required, 3-255 chars)
  - `message` (text, required, 1-2000 chars)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT only to `anon` and `authenticated`, so visitors can submit the contact form but cannot read other submissions.
- Single INSERT policy enforces field length limits server-side.

3. Notes
- The site has no sign-in, so visitors submit as `anon`.
- Reading submissions is done from the Supabase dashboard using the service role.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(message) BETWEEN 1 AND 2000
);
