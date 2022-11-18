import {resolve} from '../navigation/index.js';
import {createWriteStream} from 'fs';

export async function add(path, fileName) {
    const correctPath = await resolve(path, fileName);
    const ws = createWriteStream(correctPath);
    return ws.close();
}