import {dirname} from 'path';

export function up(path) {
    return dirname(path);
}