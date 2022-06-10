import {resolve} from './pathResolver.js';

export async function cd(basePath, destPath) {
    return resolve(basePath, destPath, true);
}