import {access, rename} from 'fs/promises';
import {resolve} from '../navigation/pathResolver.js';
import {basename} from 'path';

export async function rn(path, sourceFilePath, destFilePath) {
    const srcFileFullPath = await resolve(path, sourceFilePath, true);
    const destFileFullPath = await resolve(path, basename(destFilePath));
    try {
        await access(destFileFullPath);
    } catch {
        return rename(srcFileFullPath, destFileFullPath);
    }
    throw new Error();
}
