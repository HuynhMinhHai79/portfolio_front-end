import { Pool } from 'pg';

const isServer = typeof window === 'undefined';

const pool = isServer
  ? new Pool({
      host: process.env.POSTGRES_HOST ,
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'your_password',
      database: process.env.POSTGRES_DATABASE || 'your_database_name',
      port: Number(process.env.POSTGRES_PORT) || 5432,
    })
  : null;

export const saveMessage = async (message: string) => {
    if (!pool) throw new Error('Database pool is not initialized on the client-side');

    const client = await pool.connect();
    try {
        const result = await client.query('INSERT INTO messages (content) VALUES ($1) RETURNING *', [message]);
        return result.rows[0];
    } catch (error) {
        console.error('Error saving message:', error);
        throw error;
    } finally {
        client.release();
    }
};

export default pool;
