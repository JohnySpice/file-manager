import {operationsHandler as fs} from './fs/operationsHandler.js';

export const commandsMap = new Map([
    ['.exit', process.exit],
    ['ls',fs],
    ['up', fs],
    ['cd', fs],
    ['cat', fs],
    ['add', fs],
    ['rn', fs],
    ['cp', fs],
    ['mv', fs],
    ['rm', fs],
]);
