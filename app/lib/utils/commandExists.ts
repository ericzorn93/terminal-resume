import * as bin from './bin';

export const commandExists = (command: string) => {
  const [rootCommand] = command.split(' ');
  const commands = ['clear', ...Object.keys(bin)];
  return commands.indexOf(rootCommand.toLowerCase()) !== -1;
};
