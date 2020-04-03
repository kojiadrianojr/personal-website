import React, { createContext, useContext } from 'react';

const DataContext = createContext({});

function DataProvider(props) {
    return <DataContext.Provider value='Value' {...props} />
}

function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a Provider');
    }
    return context;
}

export {useData, DataProvider}