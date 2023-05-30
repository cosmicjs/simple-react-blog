import React from 'react';

export default function Tag({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900'>
      <span className='pt-[3px] text-xs uppercase leading-none text-cyan-600 dark:text-cyan-300'>{children}</span>
    </div>
  );
}
