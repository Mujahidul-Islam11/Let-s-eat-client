import Breadcrumbs from "../../../UI/Breadcrumbs/Breadcrumbs";
import useFavorites from "../../../hooks/useFavorites";

const MyFavorites = () => {
  const [favItems, refetch] = useFavorites();
  const tableTitles = (
    <>
      <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Images
      </th>
      <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Product
      </th>
      <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Price
      </th>
      <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
        Remove
      </th>
    </>
  );

  const totalPrice = favItems?.reduce((sum, item)=> sum + item?.price, 0)

  return (
    <div className="md:mx-12 w-full">
      <Breadcrumbs routeName={"Favorites"} pageTitle={"My Favorites"} />

      <section className="flex justify-between items-center w-3/4 mx-auto mb-4">
        <h3>Items: {favItems?.length}</h3>
        <h3>Total Price: {totalPrice}</h3>
        <button className="text-lg bg-yellow-400 font-extralight py-2 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md flex justify-center text-black">
          Pay
        </button>
      </section>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border mx-auto">
          <thead>
            <tr>{tableTitles}</tr>
          </thead>
          <tbody>
            {favItems?.map((favItem, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={favItem?.img}
                    alt={favItem?.name}
                    className="size-12 md:size-16 object-cover rounded-md mx-auto flex justify-center"
                  />
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium text-center text-sm md:text-lg">
                  {favItem?.name}
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium text-center text-sm md:text-lg">
                  ${favItem?.price}
                </td>
                <td className="px-6 py-4">
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

export default MyFavorites;
