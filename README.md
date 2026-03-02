# supaBaseLab

Simple lab project that loads `books` from Supabase and displays them in a table.

## Setup

1. Copy `supabase.config.example.js` to `supabase.config.js`.
2. Paste your Supabase project URL and public anon API key into `supabase.config.js`.
3. Start localhost with Node.js:
	- `npm start`
4. Open `http://localhost:3000`.

### Alternative

- You can also run: `node server.js`

## Notes

- The app uses the Supabase JavaScript SDK (`@supabase/supabase-js`) from a CDN.
- It reads from the `books` table and builds table columns from the returned data keys, so the columns match your Supabase data.