import {readdir} from 'fs/promises';

export const ls = async (dirPath) => {
    const filesNames = await readdir(dirPath);
    return filesNames.join('\n');
};