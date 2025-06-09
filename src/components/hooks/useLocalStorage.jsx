import { useEffect, useState } from "react";


const useLocalStorage = (storageKey, defaultVAlue) => {
    const [value, setValue] = useState(
       JSON.parse(localStorage.getItem(storageKey)) ?? defaultVAlue);
       useEffect(()=>{
        localStorage.setItem(storageKey,JSON.stringify(value))
       },[value,storageKey]);
       return[value,setValue]
};

export default useLocalStorage;