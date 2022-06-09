import {ls} from './navigation/ls.js';
import {setPath} from '../cli/inputOutputController.js';
import {up} from './navigation/up.js';
import {cd} from './navigation/cd.js';

export async function handleFsOperations(command, parameters, path) {
    if (command === 'ls') {
        return ls(path);
    }
    if (command === 'up') {
        setPath(up(path));
    }
    if (command === 'cd') {
        const destPath = parameters[0] || '';
        const newPath = await cd(path, destPath);
        setPath(newPath);
    }
} 