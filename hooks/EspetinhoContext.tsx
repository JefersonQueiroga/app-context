import React, {createContext, ReactNode,useContext,useState} from 'react';
import { Espetinho } from '@/model/Espetinho';

interface EspetinhoProviderProps {
  children: ReactNode;
}

interface EspetinhoData extends Espetinho {
  amount: number;
}

interface EspetinhoContextData {
  listaEspetinho: EspetinhoData[];
  addEspetinho: (espetinho: Espetinho) => void;
  removeEspetinho: (espetinhoId: number) => void;
  clearEspetinhos: () => void;
}

const EspetinhoContext = createContext<EspetinhoContextData>({} as EspetinhoContextData);

function EspetinhoProvider({ children }: EspetinhoProviderProps) {
  const [listaEspetinho, setListaEspetinho] = useState<EspetinhoData[]>([]);
  
  function addEspetinho(espetinho: Espetinho) {
    setListaEspetinho((prevEspetinhos) => {
      const existingEspetinho = prevEspetinhos.find( (item) => item.id === espetinho.id );
      if (existingEspetinho) {
        return prevEspetinhos.map((item) =>
          item.id === espetinho.id ? { ...item, amount: item.amount + 1 } : item );
      } else {
        return [...prevEspetinhos, { ...espetinho, amount: 1 }];
      }
    });
    console.log(listaEspetinho);
  }

  function removeEspetinho(espetinhoId: number) {
    setListaEspetinho((prevEspetinhos) => {
      const existingEspetinho = prevEspetinhos.find((item) => item.id === espetinhoId );
      if (existingEspetinho && existingEspetinho.amount > 1) {
        return prevEspetinhos.map((item) =>
          item.id === espetinhoId ? { ...item, amount: item.amount - 1 } : item
        );
      } else {
        return prevEspetinhos.filter((item) => item.id !== espetinhoId);
      }
    });
  }

  function clearEspetinhos() {
    setListaEspetinho([]);
  }

  return (
    <EspetinhoContext.Provider
      value={{
        listaEspetinho,
        addEspetinho,
        removeEspetinho,
        clearEspetinhos,
      }}
    >
      {children}
    </EspetinhoContext.Provider>
  );
}

function useEspetinho() {
  const context = useContext(EspetinhoContext);
  if (!context) {
    throw new Error('useEspetinho deve ser usado dentro de um EspetinhoProvider');
  }
  return context;
}

export { EspetinhoProvider, useEspetinho };
