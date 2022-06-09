import {getUserName} from './getNameFromArgs.js';
import {homedir} from 'os';
import {createInterface} from 'readline';
import {commandsMap} from '../commandsList.js';

let userName;
let path = homedir();
//['up', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];
const ioInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

function greetings() {
    console.log(`Welcome to the File Manager, ${userName}!`);
}

function farewell() {
    console.log(`Thank you for using File Manager, ${userName}!\n`);
}

function printCurrentDirectory() {
    console.log(`You are currently in ${path}`);
}

export function init() {
    userName = getUserName();
    greetings();
    printCurrentDirectory();
    ioInterface.prompt();
    ioInterface.on('line', inputHandler);
    process.on('exit', () => {
        ioInterface.close();
        farewell();
        process.exit(0);
    });
}

export function setPath(newPath) {
    path = newPath;
    printCurrentDirectory();
}

async function inputHandler(data) {
    const [commandName, ...parameters] = data?.toString().trim().split(' ');
    if (!commandsMap.has(commandName)) {
        console.log('Invalid input');
    } else {
        try {
            const result = await commandsMap.get(commandName)(commandName, parameters, path);
            if (result) {
                console.log(result);
            }
        } catch (e) {
            console.error('Operation failed');
        }
    }
    ioInterface.prompt();
}