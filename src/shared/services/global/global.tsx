interface GlobalContextType {
    messages: any[];
    setMessages: React.Dispatch<React.SetStateAction<any[]>>;
    sequence: number;
    setSequence: React.Dispatch<React.SetStateAction<number>>;
  }
  interface GlobalProviderProps {
    children: ReactNode;
  }
  import React, { createContext, useState, useContext, ReactNode } from 'react';
  interface GlobalContextType {/*...*/}
  
  const GlobalContext = createContext<GlobalContextType | null>(null);
  
  interface GlobalProviderProps {/*...*/}
  
  export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
      const [messages, setMessages] = useState<any[]>([]);
      const [sequence, setSequence] = useState<number>(1);
    
      return (
        <GlobalContext.Provider value={{ messages, setMessages, sequence, setSequence }}>
          {children}
        </GlobalContext.Provider>
      );
    };
  
  export const useMessages = () => useContext(GlobalContext);