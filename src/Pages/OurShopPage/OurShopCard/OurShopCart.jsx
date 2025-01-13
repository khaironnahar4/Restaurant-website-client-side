import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Auth/UseAuth/useAuth";
import useCategory from "../../../Hooks/useCategory";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

function OurShopCart({ category }) {
  const [datas] = useCategory(category);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()

  // console.log(datas);
  const handleAddtoCard = (data) => {
    const {_id, name, image, category, price} = data;
    const cardData = {
      cardId: _id,
      name,
      image,
      category,
      price,
      email: user?.email
    }
    if (user && user?.email) {
      axiosSecure.post('/carts', cardData)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is added to your card.`,
            showConfirmButton: false,
            timer: 2000
          });
          // refetch data and update count of add to cart data
          refetch();
        }
      })
    } else {
      Swal.fire({
        title: "You are not login!",
        text: "Do you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in", {state: location?.pathname});
        }
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
      {datas.map((data) => (
        <div key={data._id} className="card bg-gray-100 shadow-xl">
          <figure>
            <img
              src={data.image}
              alt={`${data.name} image`}
              className="object-cover object-center w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-[24px] font-semibold mx-auto">{data.name}</h2>
            <p>{data.recipe}</p>
            <div className="card-actions justify-center">
              <button
                onClick={()=> handleAddtoCard(data)}
                className="py-2 px-4 text-[#BB8506] bg-gray-200 border-b-2 border-[#BB8506] 
              rounded-md uppercase hover:bg-black"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurShopCart;
