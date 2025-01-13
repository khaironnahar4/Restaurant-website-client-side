import axios from "axios";
import { useEffect, useState } from "react"


function useCategory(name) {
    const [datas, setDatas] = useState([]);
    // console.log(name);
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/menu?category=${name}`)
        .then(res => {
            setDatas(res.data);
        })
       
    }, [name])
  return [datas];
}

export default useCategory