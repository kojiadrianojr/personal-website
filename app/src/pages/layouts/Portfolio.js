import React from 'react';
import AppProvider from '../../common-components/context';
import Profile from '../profile';


function PortfolioApp() {
    return (
        <div>
            <Profile />
        </div>
    )
}

export default (props) => {
    return (
        <AppProvider>
            <PortfolioApp {...props} /> 
        </AppProvider>
    )
}