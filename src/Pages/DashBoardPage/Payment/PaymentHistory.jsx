import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Auth/UseAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";

function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user.email}`);
      return res.data;
    },
  });
  console.log(payments);

  return (
    <div>
      <SectionHeading
        heading="Payment History"
        subHeading="All your payments"
      ></SectionHeading>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Price</th>
                <th>Transiction ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => 
                <tr key={payment._id}>
                  <th>{idx+1}</th>
                  <td>${payment.price}</td>
                  <td>{payment.transictionId}</td>
                  <td>{payment.status}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
