import process from 'node:process';
import redis from 'redis';

export const redisClient = redis.createClient({
  url: process.env.REDIS_URI,
});
