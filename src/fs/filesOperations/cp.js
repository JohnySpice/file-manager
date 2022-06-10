import {resolve} from '../navigation/pathResolver.js';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';
import {basename, join} from 'path';

export async function cp(basePath, sourceFilePath, destFilePath) {
    const [resolvedSourcePath, destResolvedPath] = await Promise.all([
        resolve(basePath, sourceFilePath, true),
        resolve(basePath, join(destFilePath, basename(sourceFilePath)))
    ]);
    const rs = createReadStream(resolvedSourcePath);
    const ws = createWriteStream(destResolvedPath);
    return pipeline(
        rs,
        ws
    );
}