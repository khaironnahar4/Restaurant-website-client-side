import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"


function useMenu() {
    const axiosPublic = useAxiosPublic();

    const {data : menu = [], isPending : isMenuLoading ,refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

  return [menu, refetch, isMenuLoading]
}

export default useMenu