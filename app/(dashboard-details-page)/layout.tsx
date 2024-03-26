'use client'

import { AppContextProvider } from "@/store/app-context";

interface Props {
    children: React.ReactNode;
}

export default function layout({ children }: Props) {
    return (
        <AppContextProvider>
            {children}
        </AppContextProvider>
    )
}