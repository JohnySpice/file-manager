import {resolve} from './pathResolver.js';
import {stat} from 'fs/promises';

export async function cd(basePath, destPath) {
    const resolvedDestPath = await resolve(basePath, destPath, true);
    const pathStat = await stat(resolvedDestPath);
    if (!pathStat.isDirectory()) {
        throw new Error();
    }
    return resolvedDestPath;
}