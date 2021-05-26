import React ,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state

const initialState = {
    
    users: [
        {id:1 ,name:'user One'},
        {id:2 ,name:'user 2'},
        {id:3 ,name:'user 3'},
    ]
};

export const GlobalContext = createContext(initialState);


export const GLobalProvider = ({children})=> {
    const [state, dispatch] = useReducer(AppReducer, initialState);
 return (
     <GlobalContext.Provider value={{users: state.users}} >
         {children}
     </GlobalContext.Provider>
 )   
}