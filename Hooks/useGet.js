import axios from "axios"
import { useEffect, useState } from "react"



export default function useGet(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        axios.get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

        setLoading(false);

    } , [url])

  return (
    {data, loading}
  )
}
