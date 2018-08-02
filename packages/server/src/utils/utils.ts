import { getConnectionOptions, createConnection } from 'typeorm';
import { Resolver, GraphQLMiddlewareFunc } from '../types/graphql-utils';
import { ValidationError } from 'yup';

export const formatYupError = (err: ValidationError) => {
  const errors: Array<{ path: string; message: string }> = [];
  err.inner.forEach(e => {
    errors.push({
      path: e.path,
      message: e.message
    });
  });

  return errors;
};

export const createMiddleware = (
  middlewareFunc: GraphQLMiddlewareFunc,
  resolverFunc: Resolver
) => (parent: any, args: any, context: any, info: any) =>
  middlewareFunc(resolverFunc, parent, args, context, info);

export async function createDb() {
  const connectionOptions = await getConnectionOptions('root');
  const rootConnection = await createConnection({
    ...connectionOptions,
    name: 'default'
  });

  const dbName =
    process.env.NODE_ENV === 'test'
      ? process.env.DB_NAME_TEST
      : process.env.DB_NAME;
  const grantQ =
    'GRANT ALL ON ' + dbName + '.* TO `' + process.env.DB_USER + '`@`%`;';

  await rootConnection
    .query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)
    .then(async () => {
      await rootConnection.query(grantQ);
      await rootConnection.close();
    });
}
