import { FaEdit } from "react-icons/fa";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { FaTrash } from "react-icons/fa6";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

function ManageItems() {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteMenu = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} item has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionHeading
        heading="Manage All Items"
        subHeading="Hurry Up!"
      ></SectionHeading>

      <div>
        <h2 className="text-2xl font-2 font-bold uppercase w-full">
          Total Menu Items: {menu.length}
        </h2>

        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={`${item.name} image`} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/update-items/${item._id}`}>
                      <button className="btn btn-warning text-white text-xl">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteMenu(item)}
                      className="btn btn-error text-white text-xl"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageItems;
