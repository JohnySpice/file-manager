import {createHash} from 'crypto';
import {resolve} from '../fs/navigation/index.js';
import {createReadStream} from 'fs';
import {pipeline} from 'stream/promises';

export async function hash(command = 'hash', [pathToFile], basePath) {
    const resolvedPathToFile = await resolve(basePath, pathToFile, true);
    const hashObject = createHash('sha256');
    const rs = createReadStream(resolvedPathToFile);
    await pipeline(rs, hashObject);
    return hashObject.digest('hex');
}