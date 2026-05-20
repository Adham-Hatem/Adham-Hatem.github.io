import { createContext, useState, useEffect } from "react";

export function createCycleContext(options, attributeName, storageKey) {
  const Context = createContext();

  function Provider({ children }) {
    const [index, setIndex] = useState(() => {
      const saved = localStorage.getItem(storageKey);
      return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
      const value = options[index];
      document.documentElement.setAttribute(attributeName, value);
      localStorage.setItem(storageKey, index);
    }, [index]);

    const cycle = () => {
      setIndex((prev) => (prev + 1) % options.length);
    };

    return (
      <Context.Provider value={{ cycle, current: options[index], index }}>
        {children}
      </Context.Provider>
    );
  }

  return { Context, Provider };
}