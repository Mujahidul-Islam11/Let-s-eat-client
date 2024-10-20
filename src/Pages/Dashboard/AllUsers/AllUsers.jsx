import React from "react";
import Breadcrumbs from "../../../UI/Breadcrumbs/Breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "sonner";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const tableTitles = (
    <>
      <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Name
      </th>
      <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Email
      </th>
      <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Role
      </th>
      <th className="px-3 md:px-6 py-2 md:py-4text-center font-semibold text-gray-700 text-sm md:text-lg">
        Action
      </th>
    </>
  );

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

const handleDeleteUser = (user) =>{
    toast.custom((t) => (
        <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
          <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
            <ion-icon name="alert-outline"></ion-icon>
          </span>
          <h1 className="text-center">
            Are you sure you want to delete {user?.name}??
          </h1>
          <div className="flex justify-center gap-12">
          <button
            onClick={() => {
              toast.dismiss(t);
            }}
            className="text-sm md:text-[16px] bg-green-500 font-extralight py-2 px-5 rounded-full hover:bg-green-600 transition-all size-fit shadow-md text-white"
          >
            No
          </button>
          <button
            onClick={() => {
              toast.dismiss(t);
              deleteUser();
            }}
            className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
          >
            Yes
          </button>
          </div>
        </div>
      ));
  
      const deleteUser = () => {
        axiosSecure
          .delete(`/users/${user?._id}`)
          .then((result) => {
            if (result.data.deletedCount > 0) {
              toast.success(
                `Successfully deleted ${user?.name}`,
                {
                  duration: 3000,
                }
              );
              refetch();
            }
          })
          .catch((err) => {
            toast.error(`Oops! something went wrong, please try again.`, {
              duration: 3000,
            });
          });
      };
}

  return (
    <div className="w-full mx-12">
      <Breadcrumbs routeName={"Users"} pageTitle={"All Users"} />
      <section className="flex justify-end items-center w-full md:w-3/4 mx-auto mb-4 gap-3">
        <h3 className="text-sm md:text-lg">Total Users: {users?.length}</h3>
      </section>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border mx-auto rounded-xl">
          <thead>
            <tr>{tableTitles}</tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm md:text-lg">
                  {user?.name}
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm md:text-lg">
                  {user?.email}
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm">
                <span className="bg-gray-200 px-2 py-1 rounded-full border border-gray-400 cursor-pointer">{user?.role}</span>
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4">
                  <button onClick={()=> handleDeleteUser(user)} className="text-xl text-red-500 text-center mx-auto flex justify-center">
                  <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
