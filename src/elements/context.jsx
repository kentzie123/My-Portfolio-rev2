import React, { useContext,useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

      const [showCertModal, setShowCertModal] = useState(false);
      const [selectedCertificate, setSelectedCertificate] = useState('');


      return (
        <AppContext.Provider value={{showCertModal, setShowCertModal,selectedCertificate, setSelectedCertificate}}>
            {children}
        </AppContext.Provider>
      )

}

const useGlobalContext = () =>{
    return (
        useContext(AppContext)
    )
}


export {useGlobalContext, AppProvider};