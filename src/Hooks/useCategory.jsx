import { useEffect, useState } from "react"


function useCategory(name) {
    const [datas, setDatas] = useState([]);
    // console.log(name);
    
    useEffect(()=>{
        fetch(`menu.json`)
        .then(res => res.json())
        .then(data => {
            const selectedDatas = data.filter(item => item.category===name);
            setDatas(selectedDatas);
        })
    }, [name])
  return [datas];
}

export default useCategory