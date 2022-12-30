
function log(level, message) {
    process.stdout.write(`${level}: ${message} \n`);
}

export class Logger {

    debug(message) {
        log('Debug', message);
    }

    info(message) {
        log('Info', message);
    }

    error(message) {
        log('Error', message);
    }

}

