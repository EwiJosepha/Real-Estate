'use client'

import { createContext, useContext, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type { IPropertyInfo } from '@/interfaces/index';

interface IAppContext {
    propertyInfo: IPropertyInfo;
    setPropertyInfo: Dispatch<SetStateAction<IPropertyInfo>>;
}

const AppContext = createContext<IAppContext | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [propertyInfo, setPropertyInfo] = useState<IPropertyInfo>({
        propertyName: "",
        description: "",
        propertyType: "",
        listedIn: "",
        price: "",
    });

    return (
        <AppContext.Provider value={{
            propertyInfo,
            setPropertyInfo,
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext) as IAppContext;

export {
    AppContextProvider,
    useAppContext,
}
