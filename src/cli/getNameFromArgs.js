export const getUserName = () => {
    const normalizedArgs = process.argv.slice(2);
    const argWithUserName = normalizedArgs.find(arg => arg.startsWith('--username'));
    return argWithUserName?.slice(argWithUserName.indexOf('=') + 1) || 'Anonymous';
};