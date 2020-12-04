import React from 'react';

const BreadcrumbStateContext = React.createContext({
    title: null,
    links: [],
    show: false
})


function BreadcrumbProvider({children}) {
    const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    return (
        <BreadcrumbStateContext.Provider value={state}>
            {children}
        </BreadcrumbStateContext.Provider>
    )
}


export {BreadcrumbProvider}