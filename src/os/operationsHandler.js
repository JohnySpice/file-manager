import {EOL, cpus, homedir, userInfo, arch} from 'os';

export async function operationsHandler(command, parameters) {
    const normalizeParams = parameters[0]?.slice(2);
    if (normalizeParams === 'EOL') {
        return EOL;
    }
    if (normalizeParams === 'cpus') {
        const cpusInfo = cpus();
        return cpusInfo.reduce((acc, elem) => {
            acc.cpus.push({model: elem.model, clockRate: elem.speed / 1000});
            return acc;
        }, {cpuAmount: cpusInfo.length, cpus: []});
    }
    if (normalizeParams === 'homedir') {
        return homedir();
    }
    if (normalizeParams === 'username') {
        return userInfo().username;
    }
    if (normalizeParams === 'architecture') {
        return arch();
    }
    throw new Error('Invalid input');
}