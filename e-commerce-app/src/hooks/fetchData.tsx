import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
// import axios from 'axios';
import axios from 'axios';


export const useToFetchtchData = async (url: string) => {
    const [error, setError] = useState<string>('');
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const baseUrl: string = 'https://fakestoreapi.com/products';
    useEffect(() => {

        setLoading(true);
        async function call() {
            try {
                // const res = await fetch(url);
                const res = await axios.get(baseUrl + url);
                const data = await get(res, 'data');
                // const data = 
                setApiData(data);
            } catch (err) {
                setError(err as string);
            } finally {
                setLoading(false);
            }
        }
        call();

    }, [url]);    
    
    return { apiData, loading, error }
}

export default useToFetchtchData;