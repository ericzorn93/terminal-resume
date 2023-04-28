'use client';

import { type FC, useEffect, useRef, useCallback } from 'react';

import { Input } from '@components/home/input';
import { History } from '@components/home/history/History';
import { banner } from '@utils/bin';

import { useHistory } from './history/hook';

const TerminalWrapper: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef(null);

  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(banner()), []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <div onClick={onClickAnywhere}>
      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalWrapper;
