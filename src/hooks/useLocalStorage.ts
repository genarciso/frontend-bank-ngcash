import { useCallback, useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue?: T
  ): [T, (value: T) => void] {
    const [state, setState] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch {
            return initialValue;
        }
    });
  
    const setValue = useCallback(
        (value: T) => {
            try {
                setState(value);
                if (value === undefined) {
                    localStorage.removeItem(key);
                } else {
                    localStorage.setItem(key, JSON.stringify(value));
                }
            } catch (error) {
                window.console.error(error);
            }
        },
        [key]
    );
  
    return [state, setValue];
  }