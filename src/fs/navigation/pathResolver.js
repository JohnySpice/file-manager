import {resolve as rs} from 'path';
import {access} from 'fs/promises';

export async function resolve(basePath, pathSegments, checkAccess = false) {
    const resolvedPath = rs(basePath, pathSegments);
    if (checkAccess) {
        await access(resolvedPath);
    }
    return resolvedPath;
} 