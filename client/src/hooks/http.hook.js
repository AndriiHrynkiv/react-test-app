import {useState, useCallback} from 'react';

export const Http = () => {
   const [loading, setLoading] = useState (false);
    const [error, setError] = useState (null);

    const request = useCallback( async(url, method="GET", body=null, headers={}) => {
        setLoading(true);
        try {
            const response  = await fetch(url, {method, body, headers})
            const data = await response.json();
            setLoading(false);

            if (!data.ok) {
                throw new Error("error")
            }


        } catch (e){
            setLoading(false);
            setError(e.message)
            throw e
        }
    }, [])

    return {loading, request, error}

}