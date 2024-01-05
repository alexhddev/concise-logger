import { Logger } from './Logger'

const secret = process.env.SECRET

new Logger().logWithId('Here is the secret: ' + secret)
