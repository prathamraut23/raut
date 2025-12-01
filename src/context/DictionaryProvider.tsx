'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import type { Dictionary } from '@/lib/i18n/get-dictionary';

const DictionaryContext = createContext<Dictionary | null>(null);

export const DictionaryProvider = ({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: ReactNode;
}) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (context === null) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
};
