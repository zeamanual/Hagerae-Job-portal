import React,{useState,useEffect} from 'react'
import axios from 'axios'
function useFetch(url) {
    let [loading, setLoading]=useState(true)
    let [data, setData] =useState([])
    let [error,setError]=useState({errorOccured:false,errorMessage:''})
    let fetchData=async(url)=>{

        try {

            let response = await axios.get(url)
            setLoading(false)
            setData(response.data)
            
        } catch (error) {
            setLoading(false)
            setError({errorOccured:true,errorMessage:error.message})
        }
    }


      useEffect(()=>{
        fetchData(url)
      },[])

    return {data,loading,error}
}

export default useFetch