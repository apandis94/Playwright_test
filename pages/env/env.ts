import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'dev';

dotenv.config({
  path: path.resolve(`pages/env/.env.${env}`)
});

console.log(`🌍 Loaded env: .env.${env}`);