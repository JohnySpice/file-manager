import {unlink} from 'fs/promises';
import {resolve} from '../navigation/index.js';

export async function rm(basePath, pathToFile) {
    const resolvedPath = await resolve(basePath, pathToFile, true);
    return unlink(resolvedPath);
}