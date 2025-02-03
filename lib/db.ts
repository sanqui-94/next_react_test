import { Pool } from 'pg';

let pool: Pool | undefined;

if (!pool) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

export async function query(text: string, params?: any[]) {
  if (!pool) {
    throw new Error('Database pool has not been initialized');
  }
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}

export async function connect() {
  if (!pool) {
    throw new Error('Database pool has not been initialized');
  }
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database', err);
    throw err;
  }
}
