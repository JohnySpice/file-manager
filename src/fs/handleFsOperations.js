import {ls} from './navigation/ls.js';
import {setPath} from '../cli/inputOutputController.js';
import {up} from './navigation/up.js';
import {cd} from './navigation/cd.js';
import {cat} from './filesOperations/cat.js';
import {add} from './filesOperations/add.js';
import {rn} from './filesOperations/rn.js';
import {cp} from './filesOperations/cp.js';

export async function handleFsOperations(command, parameters, path) {
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
} 