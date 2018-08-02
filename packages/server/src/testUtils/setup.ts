import { startServer } from '../startServer';
import { AddressInfo } from 'net';
import { createDb } from '../utils/utils';

export const setup = async () => {
  await createDb();
  const app = await startServer();
  const { port } = app.address() as AddressInfo;
  process.env.TEST_HOST = `http://127.0.0.1:${port}`;
};


