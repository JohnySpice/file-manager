import {createBrotliDecompress} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';
import {resolve} from '../fs/navigation/index.js';
import {basename, sep} from 'path';

export async function decompress(basePath, sourcePath, destinationPath) {
    const decompressor = createBrotliDecompress();
    const resolvedSrcPath = await resolve(basePath, sourcePath, true);
    const fileName = basename(resolvedSrcPath, '.br');
    const resolvedDestPath = await resolve(basePath, `${destinationPath}${sep}${fileName}`);
    const rs = createReadStream(resolvedSrcPath);
    const ws = createWriteStream(resolvedDestPath);
    return pipeline(rs, decompressor, ws);
}