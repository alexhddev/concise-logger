import { getRandomId } from './lib/IdGenerator';


type level = 'Debug' | 'Info' | 'Error';

function log(level: level, message: string) {
    process.stdout.write(`${level}: ${message} \n`);
}

export class Logger {

    debug(message: string) {
        log('Debug', message);
    }

    info(message: string) {
        log('Info', message);
    }

    error(message: string) {
        log('Error', message);
    }

    logWithId(message: string) {
        log('Info', `${getRandomId()} ${message}`);
    }

}

