import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(dark)

    useEffect(()=>{
        // const body = document.querySelector(body)
        const body = document.body;
        if(darkMode){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    },[darkMode])

    return [darkMode, setDarkMode]

}

export default useDarkMode;