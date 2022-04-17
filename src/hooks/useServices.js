import { useEffect, useState } from "react"

const useServices = () => {
    const [ services , setServices] = useState([])
    useEffect(()=>{
        const url = `https://raw.githubusercontent.com/EmtiazHossainE2/edu-json/main/services.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    
    return [ services , setServices]
}
export default useServices;