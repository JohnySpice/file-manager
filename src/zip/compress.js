import {createBrotliCompress} from 'zlib';
import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {resolve} from '../fs/navigation/index.js';

export async function compress(basePath, sourcePath, destinationPath) {
    const gzip = createBrotliCompress();
    const resolvedSrcPath = await resolve(basePath, sourcePath, true);
    const resolvedDestPath = await resolve(basePath, destinationPath);
    const rs = await createReadStream(resolvedSrcPath);
    const ws = createWriteStream(resolvedDestPath);
    return pipeline(rs, gzip, ws);
}