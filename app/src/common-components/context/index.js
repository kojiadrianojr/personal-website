import React from 'react';
import { DataProvider } from './data-context';

const AppProvider = ({ children }) => {
    return (
        <DataProvider>{children}</DataProvider>
    )
}

export default AppProvider;