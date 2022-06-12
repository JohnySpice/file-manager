import {cp, rm} from './index.js';

export async function mv(basePath, sourceFilePath, destFilePath) {
    await cp(basePath, sourceFilePath, destFilePath);
    return rm(basePath, sourceFilePath);
}