import { Logger } from './src/Logger.js'

const secret = process.env.SECRET;

new Logger().info('here is the changed SECRET: ' + secret);
