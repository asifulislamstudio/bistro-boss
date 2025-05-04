import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useMenu = () => {
    // const [menu , setMenu] = useState([])
    // const [loading , setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

    const {data: menu = [], isPending : loading} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic('/menu');
            return res.data;

        }
    });


    // useEffect(()=>{
    //     fetch('http://localhost:8000/menu')
    //     .then(res => res.json())
    //     .then(data => {
            
    //         setMenu(data)
    //         setLoading(false)
    //     } )
    // },[])

    return [ menu, loading]
}


export default useMenu