import {getUserName} from './getNameFromArgs.js';
import {homedir} from 'os';
import {createInterface} from 'readline';
import {commandsMap} from '../commandsList.js';
import {parseInput} from './parseInput.js';

let userName;
let path = homedir();
const ioInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

function greetings() {
    console.log(`Welcome to the File Manager, ${userName}!`);
}

function farewell() {
    console.log(`\nThank you for using File Manager, ${userName}!\n`);
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
        process.exit();
    });
}

export function setPath(newPath) {
    path = newPath;
    printCurrentDirectory();
}

async function inputHandler(data) {
    const [commandName, ...parameters] = parseInput(data?.toString().trim());
    if (commandName) {
        if (!commandsMap.has(commandName)) {
            console.log('Invalid input');
        } else {
            try {
                const commandHandler = commandsMap.get(commandName);
                const result = await commandHandler(commandName, parameters, path);
                if (result) {
                    console.log(result);
                }
            } catch (e) {
                if (e.message === 'Invalid input') {
                    console.log(e.message);
                } else {
                    console.log('Operation failed');
                }
            }
        }
    }
    ioInterface.prompt();
}