import { toast } from "sonner";
import Breadcrumbs from "../../../UI/Breadcrumbs/Breadcrumbs";
import useFavorites from "../../../hooks/useFavorites";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";

const MyFavorites = () => {
  const [favItems, refetch] = useFavorites();
  const axiosSecure = useAxiosSecure();
  const tableTitles = (
    <>
      <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-600 text-sm md:text-lg">
        Images
      </th>
      <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-600 text-sm md:text-lg">
        Product
      </th>
      <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-600 text-sm md:text-lg">
        Price
      </th>
      <th className="px-3 md:px-6 py-2 md:py-4text-center font-semibold text-gray-600 text-sm md:text-lg">
        Remove
      </th>
    </>
  );

  const totalPrice = favItems?.reduce((sum, item) => sum + item?.price, 0);

  const handleDelete = (itemData) => {
    toast.custom((t) => (
      <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
        <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
          <ion-icon name="alert-outline"></ion-icon>
        </span>
        <h1 className="text-center">
          Are you sure you want to remove {itemData?.name} from favorites??
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
              deleteItem();
            }}
            className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
          >
            Yes
          </button>
        </div>
      </div>
    ));

    const deleteItem = () => {
      axiosSecure
        .delete(`/favorites/${itemData?._id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            toast.success(
              `Successfully deleted ${itemData?.name} from favorites!`,
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
  };

  return (
    <div className="md:mx-12 w-full">
      <Breadcrumbs routeName={"Favorites"} pageTitle={"My Favorites"} />

      <section className="flex justify-between items-center w-full md:w-3/4 mx-auto mb-4 gap-3">
        <h3 className="text-sm md:text-lg">Items: {favItems?.length}</h3>
        <h3 className="text-sm md:text-lg">Total Price: ${totalPrice.toFixed(2)}</h3>
        <NavLink to={favItems?.length > 0 && '/dashboard/payment'}>
          <button disabled={favItems?.length === 0} className="text-sm md:text-lg bg-yellow-400 font-extralight py-2 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md flex justify-center cursor-pointer text-black disabled:cursor-not-allowed disabled:bg-[#D7D9DB] disabled:text-[#C9CCCD]">
            Pay
          </button>
        </NavLink>
      </section>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border mx-auto">
          <thead className="bg-[#F2F2F2]">
            <tr>{tableTitles}</tr>
          </thead>
          <tbody>
            {favItems?.map((favItem, index) => (
              <tr key={index} className="border-t">
                <td className="px-3 md:px-6 py-2 md:py-4">
                  <img
                    src={favItem?.img}
                    alt={favItem?.name}
                    className="size-10 md:size-16 object-cover rounded-md mx-auto flex justify-center"
                  />
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm md:text-lg mt-4">
                  {favItem?.name}
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm md:text-lg">
                  ${favItem?.price}
                </td>
                <td className="px-3 md:px-6 py-2 md:py-4">
                  <button
                    onClick={() => handleDelete(favItem)}
                    className="text-2xl text-red-500 text-center mx-auto flex justify-center"
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {favItems.length === 0 && <div className="w-full px-8 py-12 border mt-6">
          <h3 className="text-3xl text-center">No Favorites Yet – Start Adding!</h3>
          <NavLink to={"/shop"}>
            <button className="bg-yellow-400 text-black font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md mx-auto flex justify-center mt-6">
              Order Now
            </button>
          </NavLink>
        </div>}
      </div>
    </div>
  );
};

export default MyFavorites;
