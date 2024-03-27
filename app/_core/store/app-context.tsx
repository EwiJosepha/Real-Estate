'use client'

import { createContext, useContext, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type { IPropertyInfo, IProfileInfo } from '@/interfaces/index';

interface IAppContext {
    propertyInfo: IPropertyInfo;
    //new
    profileInfo: IProfileInfo
    setPropertyInfo: Dispatch<SetStateAction<IPropertyInfo>>;
    setProfileInfo: Dispatch<SetStateAction<IProfileInfo>>
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

    const [profileInfo, setProfileInfo] = useState<IProfileInfo>({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        bio: ""
    })

    return (
        <AppContext.Provider value={{
            propertyInfo,
            setPropertyInfo,
            profileInfo,
            setProfileInfo
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
