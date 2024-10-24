import React, { useState } from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';

const AddItems = () => {
    const [category, setCategory] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            recipeName,
            recipeDetails,
            category,
            price,
            file,
        });
    };
    return (
        <div className='w-full h-full'>
            <Breadcrumbs routeName={"AddItems"} pageTitle={"Add New Items"} />
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 w-3/4 mx-auto p-6 shadow-xl border bg-transparent rounded-xl">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Recipe Name</label>
                    <input
                        type="text"
                        onChange={(e) => setRecipeName(e.target.value)}
                        className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter recipe name"
                        required
                    />
                </div>

                <div className='flex gap-3'>
                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            required
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="Chef's Specials">Chef's Specials</option>
                            <option value="Salads">Salads</option>
                            <option value="Beverages">Beverages</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter price"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Recipe Details</label>
                    <textarea
                        className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        placeholder="Enter recipe details"
                        rows="3"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Food Image</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="bg-transparent border rounded-md mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-yellow-100 file:text-yellow-600 hover:file:bg-yellow-200"
                        required
                    />
                </div>

                <div className="flex justify-end">
                    <button className="bg-yellow-400 font-extralight py-2 px-4 rounded-full hover:bg-yellow-500 transition-all size-fit flex justify-center mt-6 text-black">
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;