import { v4 } from 'uuid';
import { Redis } from 'ioredis';
import { User } from '../entity/User';

import {
  userSessionIdPrefix,
  redisSessionPrefix,
  forgotPasswordPrefix
} from '../constants';

export const createForgotPasswordLink = async (
  url: string,
  userId: string,
  redis: Redis
) => {
  const id = v4();
  await redis.set(`${forgotPasswordPrefix}${id}`, userId, 'ex', 60 * 20);
  return `${url}/change-password/${id}`;
};

export const removeAllUsersSessions = async (userId: string, redis: Redis) => {
  const sessionIds = await redis.lrange(
    `${userSessionIdPrefix}${userId}`,
    0,
    -1
  );

  const promises = [];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < sessionIds.length; i += 1) {
    promises.push(redis.del(`${redisSessionPrefix}${sessionIds[i]}`));
  }
  await Promise.all(promises);
};

export const forgotPasswordLockAccount = async (
  userId: string,
  redis: Redis
) => {
  // can't login
  await User.update({ id: userId }, { forgotPasswordLocked: true });
  // remove all sessions
  await removeAllUsersSessions(userId, redis);
};
