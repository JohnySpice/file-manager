import {add, cat, cp, rn, rm, mv} from './filesOperations/index.js';
import {cd, ls, up} from './navigation/index.js';
import {setPath} from '../cli/inputOutputController.js';

export async function operationsHandler(command, parameters, path) {
    if (command === 'ls') {
        return ls(path);
    }
    if (command === 'up') {
        return setPath(up(path));
    }
    if (command === 'cd') {
        const destPath = parameters[0] || '';
        const newPath = await cd(path, destPath);
        return setPath(newPath);
    }
    if (command === 'cat') {
        return cat(path, parameters[0]);
    }
    if (command === 'add') {
        return add(path, parameters[0]);
    }
    if (command === 'rn') {
        return rn(path, parameters[0], parameters[1]);
    }
    if (command === 'cp') {
        return cp(path, parameters[0], parameters[1]);
    }
    if (command === 'mv') {
        return mv(path, parameters[0], parameters[1]);
    }
    if (command === 'rm') {
        return rm(path, parameters[0]);
    }
} 