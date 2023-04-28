import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [rootCommand, ...subCommands] = command.split(' ');
  const rootCommandLower = rootCommand.toLowerCase();

  if (rootCommandLower === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(rootCommandLower) === -1) {
    setHistory(
      `shell: command not found: ${rootCommandLower}. Try 'help' to get started.`,
    );
  } else {
    const output = await bin[rootCommandLower](subCommands);
    setHistory(output);
  }

  setCommand('');
};
