import {readFile} from 'fs/promises';
import {cd} from '../navigation/cd.js';

export async function cat(basePath, pathToFile) {
    const filePath = await cd(basePath, pathToFile);
    return readFile(filePath, {encoding: 'utf8'});
}