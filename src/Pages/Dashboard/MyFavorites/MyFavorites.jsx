import useFavorites from "../../../hooks/useFavorites";


const MyFavorites = () => {
  const [favItems, refetch] = useFavorites();

  return (
    <div className="md:mx-12 overflow-x-auto w-full ">
      <table className="min-w-full border-collapse border mx-auto">
        <thead>
          <tr>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">Images</th>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">Product</th>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">Price</th>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">Remove</th>
          </tr>
        </thead>
        <tbody>
          {favItems?.map((favItem, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-4">
                <img src={favItem?.img} alt={favItem?.name} className="size-12 md:size-16 object-cover rounded-md mx-auto flex justify-center" />
              </td>
              <td className="px-6 py-4 text-gray-800 font-medium text-center text-sm md:text-lg">{favItem?.name}</td>
              <td className="px-6 py-4 text-gray-800 font-medium text-center text-sm md:text-lg">${favItem?.price}</td>
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
  );
};

export default MyFavorites;
