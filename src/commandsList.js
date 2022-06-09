import {handleFsOperations} from './fs/handleFsOperations.js';

export const commandsMap = new Map([
    ['.exit', process.exit],
    ['ls',handleFsOperations],
    ['up', handleFsOperations],
    ['cd', handleFsOperations],
    ['cat', handleFsOperations],
])
