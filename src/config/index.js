'use strict';
import dotenv from 'dotenv';

dotenv.config();

export const env = process.env.NODE_ENV || 'dev';
export const port = process.env.PORT || 3000;
export const mongoUrl =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URL_TEST
    : process.env.MONGO_URL;
