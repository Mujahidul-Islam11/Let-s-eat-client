import React from "react";
import Breadcrumbs from "../../../UI/Breadcrumbs/Breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm md:text-lg">
                {user?.role}
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4">
                  <button className="text-xl text-red-500 text-center mx-auto flex justify-center">
                    x
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
