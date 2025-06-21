import React from 'react';
import Layout from '../../layout';
import Card from '../../custom-components/card';
import { AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

// Original data format
const data = [
    {
        id: '1',
        name: 'Test',
        values: [
            { id: '1', value: 'Red', image: null },
            { id: '2', value: 'Blue', image: null },
        ],
    },
    {
        id: '2',
        name: 'Size',
        values: [
            { id: '1', value: 'Large', image: null },
            { id: '2', value: 'Small', image: null },
        ],
    },
];

export default function VariationListPage() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="w-full md:w-screen p-4 lg:pl-[18rem]">
                <Card className="p-4 bg-white shadow-sm rounded-md mb-4 border border-gray-100">
                    <h1 className="text-xl font-semibold text-gray-800">Variation List</h1>
                </Card>

                <div className="p-4 bg-white shadow rounded-md border border-gray-100">
                    <ul className="space-y-4">
                        {data.map((variation) => (
                            <li key={variation.id} className="border-b pb-4 last:border-b-0">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-base font-medium text-gray-800">{variation.name}</h2>
                                    <button
                                        className="text-teal-600 hover:text-teal-800 flex items-center gap-1 text-sm"
                                        onClick={() => navigate(`/product/variation/edit/${variation.id}`)}
                                        title="Edit Variation"
                                    >
                                        <AiOutlineEdit size={16} />
                                        Edit
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2 pl-1">
                                    {variation.values.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded border border-gray-200"
                                        >
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.value}
                                                    className="h-6 w-6 object-cover rounded-full"
                                                />
                                            ) : (
                                                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-400 text-[10px]">
                                                    img
                                                </span>
                                            )}
                                            <span className="text-sm text-gray-700">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}