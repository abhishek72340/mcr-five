import { createContext, useContext } from "react";

const fiveContext =createContext();

const FiveProvider=({children})=>{
    return(
        <fiveContext.Provider>
{children}
        </fiveContext.Provider>
    )
}
const  useFive=()=>useContext(fiveContext);
export {useFive,FiveProvider}