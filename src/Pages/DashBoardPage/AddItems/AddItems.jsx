import { useForm } from "react-hook-form";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

function AddItems() {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data, data.image[0].name);

    const imageFile = { image: data.image[0] };
    console.log(data);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log(res.data , parseFloat(data.price), res.data.data.display_url);
    

    if (res.data.success) {
      // console.log('send menu to server');
      const menuData = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      }

      const result = await axiosSecure.post('/menu', menuData);
      if(result.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu has beed uploaded successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        
      }

    }
  };

  return (
    <div>
      <SectionHeading
        heading="add an item"
        subHeading="What's New?"
      ></SectionHeading>

      <div className="w-full p-12 bg-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* name */}
          <div className="form-control w-full mt-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
              {...register("name")}
            />
          </div>
          <div className="flex gap-6 mt-6">
            {/* category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                {...register("category")}
                className="select select-bordered"
              >
                <option disabled selected>
                  Select one category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soups"}>Soups</option>
                <option value={"desserts"}>Desserts</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </label>

            {/* price */}
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price")}
              />
            </div>
          </div>

          {/* recipe details */}
          <div className="form-control mt-6">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-56"
              placeholder="Recipe Details"
              {...register("recipe")}
            ></textarea>
          </div>
          {/* image */}
          <div className="mt-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full file-input-bordered max-w-xs"
            />
          </div>

          {/* button */}
          <div className="mt-6 flex justify-center">
            <button className="btn bg-[#D1A054] text-white hover:bg-[#D1A054]">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItems;
