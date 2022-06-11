import {compress} from './compress.js';
import {decompress} from './decompress.js';

export async function operationsHandler(command, parameters, path) {
    if (command === 'compress') {
        return compress(path, parameters[0], parameters[1]);
    }
    if (command === 'decompress') {
        return decompress(path, parameters[0], parameters[1]);
    }
} 