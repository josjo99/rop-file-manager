import { useState,createContext } from 'react';

const PaymentContext = createContext();

const PaymentContextProvider = (props) => {
    const [payId,setPayId] = useState(0);

    return(
        <PaymentContext.Provider value={[payId,setPayId]}>
            {props.children}
        </PaymentContext.Provider>
    );
};

const FileContext = createContext();

const FileContextProvider = (props) => {
    const [files,setFiles] = useState([]);
    return (
        <FileContext.Provider value={[files,setFiles]   }>
            {props.children}
        </FileContext.Provider>
    );
};

export {PaymentContext,PaymentContextProvider,FileContext,FileContextProvider};