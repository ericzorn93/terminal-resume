'use client';

import { useState } from 'react';

import { History } from './types';

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistory] = useState<Array<History>>(defaultValue);
  const [command, setCommand] = useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: crypto.randomUUID(),
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
