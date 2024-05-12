import { useEffect, useState } from "react";
import axios from "../api";

export const useFetch = (api, ...rest) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios 
            .get(api)
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [...rest])
    return {data, loading, error}
}