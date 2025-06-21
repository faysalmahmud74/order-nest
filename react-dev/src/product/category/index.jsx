import React from 'react';
import Table from '../../custom-components/table';
import Layout from '../../layout';
import Card from '../../custom-components/card';
import { AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function CategoryList() {
    const navigate = useNavigate();
    // Example data
    const data = [
        {
            id: '1',
            name: 'Beverages',
            description: 'All kinds of drinks',
            image: null,
        },
        {
            id: '2',
            name: 'Snacks',
            description: 'Quick bites and snacks',
            image: null,
        },
    ];

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id', width: '10%' },
        { title: 'Name', dataIndex: 'name', key: 'name', width: '30%' },
        { title: 'Description', dataIndex: 'description', key: 'description', width: '40%' },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            width: '10%',
            render: (value, record) => (
                value ? (
                    <img src={value} alt={record.name} className="h-10 w-10 object-cover rounded-full mx-auto" />
                ) : (
                    <span className="text-gray-400 italic">No Image</span>
                )
            ),
        },
        {
            title: 'Edit',
            key: 'edit',
            width: '10%',
            render: (value, record) => (
                <button
                    className="text-teal-600 hover:text-teal-800"
                    onClick={() => navigate(`/product/category/edit/${record.id}`)}
                    title="Edit Category"
                >
                    <AiOutlineEdit size={22} />
                </button>
            ),
        },
    ];

    return (
        <Layout>
            <div className='w-full md:w-screen p-4 lg:pl-[18rem] '>
                <Card className="p-4 text-gray-700 text-xl font-semibold mb-4">Category List</Card>
                <div className="p-6 bg-white shadow-md rounded">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </Layout>
    );
}
