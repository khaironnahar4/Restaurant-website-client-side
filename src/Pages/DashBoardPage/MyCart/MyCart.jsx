import { FaRegTrashAlt } from "react-icons/fa";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

function MyCart() {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalCost = cart.reduce((total, item)=> total + item.price , 0);

    const handleDelete = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              axiosSecure.delete(`/carts/${id}`)
              .then(res =>{
                  console.log(res.data);
                  if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch();        
                  }
              })
            }
          });
        // console.log(id);
       
    }

  return (
    <div className="flex-col items-center w-full">
      <SectionHeading
        heading="Wanna do more?"
        subHeading="My Cart"
      ></SectionHeading>

      <div className="w-full">
        <div className="flex justify-between items-center text-2xl font-2 font-bold uppercase w-full">
          <h2>Total Items: {cart.length} </h2>
          <h2>Total Price: ${totalCost} </h2>
          <button className="bg-[#D1A054] py-3 px-4 text-white rounded-md">
            Pay
          </button>
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

            {
                cart.map((item, idx) => (
                    <tr key={item._id}>
                    <td>{idx+1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt={`${item.name} image`}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
    
                    <td>
                      {item.name}
                    </td>
    
                    <td>{item.price}</td>
    
                    <th>
                      <button onClick={()=> handleDelete(item._id)} 
                      className="btn btn-ghost btn-xs"><FaRegTrashAlt /></button>
                    </th>
                  </tr>
                ))
            }

             

            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
