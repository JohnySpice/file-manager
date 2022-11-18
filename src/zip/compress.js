import {createBrotliCompress} from 'zlib';
import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {resolve} from '../fs/navigation/index.js';
import {basename, sep} from 'path';

export async function compress(basePath, sourcePath, destinationPath) {
    const compressor = createBrotliCompress();
    const resolvedSrcPath = await resolve(basePath, sourcePath, true);
    const resolvedDestPath = await resolve(basePath, `${destinationPath}${sep}${basename(sourcePath)}.br`);
    const rs = createReadStream(resolvedSrcPath);
    const ws = createWriteStream(resolvedDestPath);
    return pipeline(rs, compressor, ws);
}