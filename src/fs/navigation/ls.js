import {readdir} from 'fs/promises';

export async function ls(dirPath) {
    const filesNames = await readdir(dirPath);
    return filesNames.join('\n');
}