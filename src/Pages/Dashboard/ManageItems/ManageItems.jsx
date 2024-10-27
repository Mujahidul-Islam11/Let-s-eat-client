import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {
    const [menu] = useMenu();
    const tableTitles = (
        <>
            <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
                Image
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
                Name
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
                Price
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4text-center font-semibold text-gray-700 text-sm md:text-lg">
                Actions
            </th>
        </>
    );
    return (
        <div className='w-full h-screen'>
            <Breadcrumbs routeName={"Manage Items"} pageTitle={"Manage Your Items"} />
            <table className="min-w-full border-collapse border mx-auto rounded-xl">
                <thead>
                    <tr>{tableTitles}</tr>
                </thead>
                <tbody>
                    {menu?.map((item, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium flex justify-center items-center">
                                <img className='size-14 rounded-md object-cover' src={item?.img} alt="" />
                            </td>
                            <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm">
                                {item?.name}
                            </td>
                            <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-center text-sm">
                                ${item?.price}
                            </td>
                            <td className="px-3 md:px-6 py-2 md:py-4">
                                <div className="flex justify-center gap-4">
                                    <button
                                        // onClick={() => handleDeleteItem(item)}
                                        className="text-2xl text-yellow-500 text-center font-extrabold"
                                    >
                                        <ion-icon name="create-outline"></ion-icon>
                                    </button>
                                    <button
                                        // onClick={() => handleDeleteItem(item)}
                                        className="text-2xl text-red-500 text-center"
                                    >
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;