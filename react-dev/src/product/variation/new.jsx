import React, { useState, useRef } from 'react';
import Layout from '../../layout';
import Card from '../../custom-components/card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NewVariation() {
    const router = useNavigate();
    const [name, setName] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [values, setValues] = useState([]); // [{ value: 'Red', image: null }]
    const valueInputRef = useRef(null);

    const handleAddValue = (e) => {
        e.preventDefault();
        if (valueInput.trim() && !values.some(v => v.value.toLowerCase() === valueInput.trim().toLowerCase())) {
            setValues([...values, { value: valueInput.trim(), image: null }]);
            setValueInput('');
        }
    };

    const handleValueKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddValue(e);
        }
    };

    const handleRemoveValue = (idx) => {
        setValues(values.filter((_, i) => i !== idx));
    };

    const handleImageChange = (idx, file) => {
        const updated = values.map((v, i) => i === idx ? { ...v, image: file ? URL.createObjectURL(file) : null } : v);
        setValues(updated);
    };

    const handleCancel = () => {
        router(-1);
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Show the data as a collection of objects in the console
        const data = {
            name,
            values: values.map(v => ({ value: v.value, image: v.image }))
        };
        console.log('Variation Data:', data);
        toast.success('Variation Created Successfully');
        setName('');
        setValueInput('');
        setValues([]);
        // router(-1); // Commented out so user can see the console output
    };

    return (
        <Layout>
            <div className="px-4 py-2">
                <Card className="mb-4 px-5 py-3 bg-white border border-gray-100 shadow-sm rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800">Create New Variation</h2>
                </Card>

                <form
                    onSubmit={handleSave}
                    className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 max-w-3xl"
                >
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Add Value
                        </label>
                        <input
                            type="text"
                            value={valueInput}
                            onChange={e => setValueInput(e.target.value)}
                            onKeyDown={handleValueKeyDown}
                            ref={valueInputRef}
                            placeholder="Type some text and press enter"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {values.length > 0 && (
                        <div className="mb-5">
                            <p className="text-sm text-gray-600 mb-3">Added Values</p>
                            <div className="flex flex-wrap gap-3">
                                {values.map((v, idx) => (
                                    <div
                                        key={idx}
                                        className="relative flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg p-3 w-32"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveValue(idx)}
                                            className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center hover:bg-red-600"
                                            title="Remove"
                                        >
                                            &times;
                                        </button>

                                        <label className="w-full h-20 flex items-center justify-center border border-dashed border-blue-400 rounded-md cursor-pointer mb-2 bg-gray-50 hover:bg-gray-100">
                                            {v.image ? (
                                                <img
                                                    src={v.image}
                                                    alt={v.value}
                                                    className="h-16 w-16 object-cover rounded"
                                                />
                                            ) : (
                                                <svg
                                                    className="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={e => handleImageChange(idx, e.target.files[0])}
                                            />
                                        </label>

                                        <span className="text-xs font-medium text-gray-700 bg-blue-500 text-white rounded-full px-2 py-0.5">
                                            {v.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-end mt-6 space-x-3">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-5 rounded-md transition"
                        >
                            Cancel
                        </button>
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