import { Logger } from './src/Logger.js'

const secret = process.env.SECRET_KEY;

new Logger().info('here is the secret: ' + secret);
