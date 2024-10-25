import { DataAPIClient } from '@datastax/astra-db-ts';
import { env } from '$env/dynamic/private';

const client = new DataAPIClient(env.ASTRAX_CLIENT_KEY);
const db = client.db(env.ASTRAX_CLIENT_URL);

export { db };
