import React, { useState } from 'react';
import Layout from '../../layout';
import Card from '../../custom-components/card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NewCategory() {
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: '',
        description: '',
        image: ''
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setCategory({ ...category, image: files[0] });
            setImagePreview(URL.createObjectURL(files[0]));
        } else {
            setCategory({ ...category, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show the data in the console
        console.log('Category Data:', category);
        toast.success('Category Created Successfully');
        setCategory({ name: '', description: '', image: '' });
        setImagePreview(null);
        // navigate(-1); // Uncomment to go back after save
    };

    return (
        <Layout>
            <div className="px-4 py-2">
                <Card className="mb-4 px-5 py-3 bg-white border border-gray-100 shadow-sm rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800">Create New Category</h2>
                </Card>
                <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 max-w-2xl">
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={category.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={category.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview" className="mt-2 h-20 w-20 object-cover rounded-md" />
                        )}
                    </div>
                    <div className="flex justify-end mt-6 space-x-3">
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-md transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
