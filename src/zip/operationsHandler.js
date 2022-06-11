import {compress} from './compress.js';

export async function operationsHandler(command, parameters, path) {
    if (command === 'compress') {
        return compress(path, parameters[0], parameters[1]);
    }
} 