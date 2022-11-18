import {createReadStream} from 'fs';
import {resolve} from '../navigation/index.js';

export async function cat(basePath, pathToFile) {
    const filePath = await resolve(basePath, pathToFile, true);
    const readStream = createReadStream(filePath);
    return new Promise((resolve, reject) => {
        readStream.on('data', data => {
            console.log(data.toString());
        })
            .on('error', err => {
                reject(err);
            })
            .on('end', () => {
                resolve();
            });
    });
}