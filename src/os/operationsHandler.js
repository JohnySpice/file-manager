import {EOL, cpus, homedir, userInfo, arch} from 'os';

export async function operationsHandler(command, parameters) {
    const normalizedParams = parameters[0]?.slice(2);
    if (normalizedParams === 'EOL') {
        return JSON.stringify(EOL);
    }
    if (normalizedParams === 'cpus') {
        const cpusInfo = cpus();
        return cpusInfo.reduce((acc, elem) => {
            acc.cpus.push({model: elem.model, clockRate: elem.speed / 1000});
            return acc;
        }, {cpuAmount: cpusInfo.length, cpus: []});
    }
    if (normalizedParams === 'homedir') {
        return homedir();
    }
    if (normalizedParams === 'username') {
        return userInfo().username;
    }
    if (normalizedParams === 'architecture') {
        return arch();
    }
    throw new Error('Invalid input');
}