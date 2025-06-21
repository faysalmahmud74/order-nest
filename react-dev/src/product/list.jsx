import React from 'react';
import Table from '../custom-components/table';
import Layout from '../layout';
import Card from '../custom-components/card';
import { AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    const navigate = useNavigate();
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id', width: '5%' },
        { title: 'Reference', dataIndex: 'reference', key: 'reference', width: '8%' },
        { title: 'Name', dataIndex: 'name', key: 'name', width: '10%' },
        { title: 'SKU', dataIndex: 'sku', key: 'sku', width: '8%' },
        { title: 'Category', dataIndex: 'category', key: 'category', width: '8%' },
        { title: 'Brand', dataIndex: 'brand', key: 'brand', width: '8%' },
        { title: 'Quantity', dataIndex: 'quantity', key: 'quantity', width: '6%' },
        { title: 'Unit', dataIndex: 'unit', key: 'unit', width: '6%' },
        { title: 'Cost Price', dataIndex: 'cost_price', key: 'cost_price', width: '8%' },
        { title: 'Selling Price', dataIndex: 'selling_price', key: 'selling_price', width: '8%' },
        { title: 'Discount', dataIndex: 'discount', key: 'discount', width: '6%' },
        { title: 'Tax Rate', dataIndex: 'tax_rate', key: 'tax_rate', width: '6%' },
        { title: 'Supplier ID', dataIndex: 'supplier_id', key: 'supplier_id', width: '8%' },
        { title: 'Warehouse', dataIndex: 'warehouse_location', key: 'warehouse_location', width: '8%' },
        { title: 'Status', dataIndex: 'status', key: 'status', width: '7%' },
        { title: 'Reorder Level', dataIndex: 'reorder_level', key: 'reorder_level', width: '7%' },
        { title: 'Barcode', dataIndex: 'barcode', key: 'barcode', width: '8%' },
        { title: 'Expiration', dataIndex: 'expiration_date', key: 'expiration_date', width: '8%' },
        {
            title: 'Edit',
            key: 'edit',
            width: '6%',
            render: (value, record) => (
                <button
                    className="text-teal-600 hover:text-teal-800"
                    onClick={() => navigate(`/product/edit/${record.id}`)}
                    title="Edit Product"
                >
                    <AiOutlineEdit size={22} />
                </button>
            ),
        },
    ];

    const data = [
        {
            id: '1',
            reference: 'PRD-001',
            name: 'Tomato Ketchup',
            sku: 'TK-100',
            category: 'Condiments',
            description: 'Classic tomato ketchup',
            brand: 'Heinz',
            quantity: 50,
            unit: 'pcs',
            cost_price: 1.5,
            selling_price: 2.5,
            discount: 5,
            tax_rate: 10,
            supplier_id: 'SUP-01',
            warehouse_location: 'A1',
            status: 'active',
            reorder_level: 10,
            barcode: '123456789012',
            expiration_date: '2025-12-31',
        },
        {
            id: '2',
            reference: 'PRD-002',
            name: 'Olive Oil',
            sku: 'OO-200',
            category: 'Oils',
            description: 'Extra virgin olive oil',
            brand: 'Bertolli',
            quantity: 20,
            unit: 'liter',
            cost_price: 8.0,
            selling_price: 12.0,
            discount: 0,
            tax_rate: 8,
            supplier_id: 'SUP-02',
            warehouse_location: 'B2',
            status: 'active',
            reorder_level: 5,
            barcode: '987654321098',
            expiration_date: '2026-06-30',
        },
    ];

    return (
        <Layout>
            <div className='w-full md:w-screen p-4 lg:pl-[18rem] '>
                <Card className="p-4 text-gray-700 text-xl font-semibold mb-4">Product List</Card>
                <div className="p-6 bg-white shadow-md rounded">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </Layout>
    );
}
