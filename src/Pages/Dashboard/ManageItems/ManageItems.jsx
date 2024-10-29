import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import useMenu from '../../../hooks/useMenu';
import { toast } from 'sonner';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import axios from 'axios';

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const axiosSecure = useAxiosSecure();
    const hostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
    const hostingAPI = `https://api.imgbb.com/1/upload?key=${hostingKey}`

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
            <th className="px-3 md:px-6 py-2 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-lg">
                Actions
            </th>
        </>
    );

    const handleDeleteItem = (item) => {
        toast.custom((t) => (
            <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
                <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
                    <ion-icon name="alert-outline"></ion-icon>
                </span>
                <h1 className="text-center">
                    Are you sure you want to delete {item?.name}??
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
                .delete(`/menu/admin/${item?._id}`)
                .then((result) => {
                    if (result.data.deletedCount > 0) {
                        toast.success(`Successfully deleted ${item?.name}`, {
                            duration: 3000,
                        });
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

    const handleUpdateItem = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    }

    useEffect(() => {
        if (selectedItem) {
            setValue("name", selectedItem.name);
            setValue("category", selectedItem.category);
            setValue("price", selectedItem.price);
            setValue("desc", selectedItem.desc);
        }
    }, [selectedItem, setValue]);

    const onSubmit = async (data) => {
        // host img on imgbb
        let imgURL;
        if (data.img && data.img[0]) {
            const imageFile = { image: data.img[0] }
            const imageRes = await axios.post(hostingAPI, imageFile, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
            imgURL = imageRes.data.data.display_url;
        }

        console.log(imgURL? imgURL: null)

        const itemData = {
            name: data.name,
            img: imgURL ? imgURL : selectedItem.img,
            category: data.category,
            price: Number(data.price),
            rating: 0,
            desc: data.desc,
            status: "regular"
        }
        console.log(itemData);

        // send data to the server
        if (imageRes.data.success) {
            axiosSecure.patch(`/menu/admin/${selectedItem?._id}`, itemData)
            .then(result =>{
                if(result.data.modifiedCount){
                    toast.success(`${itemData.name} food item updated`,{
                        duration: 3000
                    })
                }
            })
            .catch(err=>{
                toast.error(`Oops! Something went wrong, try again later`,{
                    duration: 3000
                })
            })

        }
        else {
            axiosSecure.patch(`/menu/admin/${selectedItem?._id}`, itemData)
            .then(result =>{
                if(result.data.modifiedCount){
                    toast.success(`${itemData.name} food item updated`,{
                        duration: 3000
                    })
                }
            })
            .catch(err=>{
                toast.error(`Oops! Something went wrong, try again later`,{
                    duration: 3000
                })
            })

        }
    };

    console.log(selectedItem)


    return (
        <div className='w-full h-screen'>
            <Breadcrumbs routeName={"Manage Items"} pageTitle={"Manage Your Items"} />
            <div className='overflow-x-auto'>
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
                                            onClick={() => handleUpdateItem(item)}
                                            className="text-2xl text-yellow-500 text-center font-extrabold"
                                        >
                                            <ion-icon name="create-outline"></ion-icon>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
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

            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Update Item"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-72 md:w-96"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full mx-auto p-6 shadow-xl border bg-transparent rounded-xl">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipe Name</label>
                        <input
                            type="text"
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter recipe name"
                            {...register("name", { required: true })}
                            readOnly
                        />
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                {...register("category", { required: true })}
                            >
                                <option value="Select a category" disabled>Select a category</option>
                                <option value="Chef's Specials">Chef's Specials</option>
                                <option value="Salads">Salads</option>
                                <option value="Beverages">Beverages</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="text"
                                className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                                placeholder="Enter price"
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Recipe Details</label>
                        <textarea
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter recipe details"
                            rows="3"
                            {...register("desc", { required: true })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Food Image</label>
                        <div className="flex gap-3 items-center">
                            <img className='size-10 rounded-md' src={selectedItem?.img} alt="" />
                            <input
                                type="file"
                                className="bg-transparent border rounded-md mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-yellow-100 file:text-yellow-600 hover:file:bg-yellow-200"
                                {...register("img")}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => { setModalIsOpen(false); setSelectedItem(null); reset(); }}
                            className="bg-gray-400 hover:bg-gray-500 text-white transition-all font-extralight py-2 px-4 rounded-full size-fit flex justify-center mt-6"
                        >
                            Cancel
                        </button>
                        <input
                            type='submit'
                            value={'Save'}
                            className="bg-yellow-400 cursor-pointer font-extralight py-2 px-4 rounded-full hover:bg-yellow-500 transition-all size-fit flex justify-center mt-6 text-black"
                        />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ManageItems;
