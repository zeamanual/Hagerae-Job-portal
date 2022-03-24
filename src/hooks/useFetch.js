import React,{useState,useEffect} from 'react'
import axios from 'axios'
function useFetch(url) {
    let [loading, setLoading]=useState(true)
    let [data, setData] =useState([])
    let [error,setError]=useState({errorOccured:false,errorMessage:''})
    let fetchData=async(url)=>{

        try {

            let response = await axios.get(url)
            console.log('data fetched \n ',response.data)
            setLoading(false)
            setData(response.data)
            
        } catch (error) {
            setLoading(false)
            setError({errorOccured:true,errorMessage:error.message})
            console.log('error occured dude..',error)
        }
    }


      useEffect(()=>{
        fetchData(url)
      },[])

    return {data,loading,error}
}

export default useFetch