import {open} from 'fs/promises';
import {resolve} from '../navigation/pathResolver.js';

export async function add(path, fileName) {
    const correctPath = await resolve(path, fileName);
    const fd = await open(correctPath, 'a');
    return fd.close();
}