// hooks are just functions
// hooks must start with 'use'...
import {useState, useEffect} from 'react'


export const useFetch = (url) => {
    // url is tne endpoint to get data from
    const [data, setData] = useState(null)

    useEffect(() => {
        // we will manually create the function inside the useEffect hook
        // this function will be called when the component is rendered\
        // this means we wont have to pass the function itself as ad dependency
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
          }
        
        // CALL the function we just defined above
        // every hook will return something
        fetchData()
    }, [url])
  
    return { data }
  }