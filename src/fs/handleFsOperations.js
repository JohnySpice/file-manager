import {ls} from './navigation/ls.js';
import {setPath} from '../cli/inputOutputController.js';
import {up} from './navigation/up.js';
import {cd} from './navigation/cd.js';
import {cat} from './filesOperations/cat.js';
import {add} from './filesOperations/add.js';

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
} 