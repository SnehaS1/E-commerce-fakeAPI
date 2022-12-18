import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
// import axios from 'axios';
import axios from 'axios';


export const fetchData = async (url: string) => {
    const [error, setError] = useState<string>('');
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        async function call() {
            try {
                // const res = await fetch(url);
                const res = await axios.get(url);
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

    }, [url])
    return { apiData, loading, error }
}

export default fetchData