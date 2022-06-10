import {cd} from '../navigation/cd.js';
import {createReadStream} from 'fs';

export async function cat(basePath, pathToFile) {
    const filePath = await cd(basePath, pathToFile);
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