import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'sonner';

const AddItems = () => {
    const axiosSecure = useAxiosSecure();
    const hostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
    const hostingAPI = `https://api.imgbb.com/1/upload?key=${hostingKey}`
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        // host img on imgbb
        const imageFile = { image: data.img[0] }
        const imageRes = await axios.post(hostingAPI, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })
        const imgURL = imageRes.data.data.display_url;

        // send data to the server
        if (imageRes.data.success) {
            const itemData = {
                name: data.name,
                img: imgURL,
                category: data.category,
                price: data.price,
                rating: 0,
                desc: data.desc,
                status: "regular"
            }

            axiosSecure.post("/menu", itemData)
            .then(result =>{
                if(result.data.insertedId){
                    toast.success(`${itemData.name} added to the database`,{
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

    return (
        <div className='w-full'>
            <Breadcrumbs routeName={"AddItems"} pageTitle={"Add New Items"} />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full md:w-3/4 mx-auto p-6 shadow-xl border bg-transparent rounded-xl">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Recipe Name</label>
                    <input
                        type="text"
                        className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter recipe name"
                        {...register("name", { required: true })}
                    />
                </div>

                <div className='flex gap-3'>
                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register("category", { required: true })}
                            defaultValue={"Select a category"}
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
                            type="number"
                            step={0.1}
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
                    <input
                        type="file"
                        className="bg-transparent border rounded-md mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-yellow-100 file:text-yellow-600 hover:file:bg-yellow-200"
                        {...register("img", { required: true })}
                    />
                </div>

                <div className="flex justify-end">
                    <input type='submit' value={'Add Item'} className="bg-yellow-400 font-extralight py-2 px-4 rounded-full hover:bg-yellow-500 transition-all size-fit flex justify-center mt-6 text-black">
                    </input>
                </div>
            </form>
        </div>
    );
};

export default AddItems;