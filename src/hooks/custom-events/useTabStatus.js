import { useState, useEffect } from 'react'; 

const useTabStatus = () => {
    const [ hasFocus, setHasFocus ] = useState(window.document.hasFocus());

    useEffect(() => {

        const handleFocus = () => {
            setHasFocus(true);
        }
        const handleBlur = () => {
            setHasFocus(false);
        }

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        //se llama cuando componente se desmonta o cuando cambia un stado que està en el [] ... esta se ejecuta primero
        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        }
    }, [])

    return {
        hasFocus,
    }
}

export default useTabStatus;