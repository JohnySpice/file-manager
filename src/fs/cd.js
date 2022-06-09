import {resolve} from 'path';
import {access} from 'fs/promises';

export async function cd(basePath, destPath) {
    const newPath = resolve(basePath, destPath);
    await access(newPath);
    return newPath;
}