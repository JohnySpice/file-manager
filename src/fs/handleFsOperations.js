import {ls} from './ls.js';
import {setPath} from '../cli/inputOutputController.js';
import {up} from './up.js';
import {cd} from './cd.js';

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