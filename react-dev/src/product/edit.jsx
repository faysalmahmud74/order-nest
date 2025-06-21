import React, { useState, useEffect, useRef } from 'react';
import Layout from '../layout';
import Card from '../custom-components/card';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { DEFAULT_IMAGE_URL } from '../components/constants';

export default function EditProduct() {
    const router = useNavigate();
    const { id: productId } = useParams();
    const [product, setProduct] = useState({
        reference: '', name: '', sku: '', category: '', description: '', image: '', brand: '', quantity: '', unit: '', cost_price: '', selling_price: '', discount: '', tax_rate: '', supplier_id: '', warehouse_location: '', status: 'active', reorder_level: '', barcode: '', expiration_date: '',
    });
    const barcodeRef = useRef(null);

    // Simulate fetching product data by ID
    useEffect(() => {
        // Replace this with real API call
        if (productId === '1') {
            setProduct({
                reference: 'PRD-001', name: 'Tomato Ketchup', sku: 'TK-100', category: 'Condiments', description: 'Classic tomato ketchup', image: '', brand: 'Heinz', quantity: 50, unit: 'pcs', cost_price: 1.5, selling_price: 2.5, discount: 5, tax_rate: 10, supplier_id: 'SUP-01', warehouse_location: 'A1', status: 'active', reorder_level: 10, barcode: '123456789012', expiration_date: '2025-12-31',
            });
        } else if (productId === '2') {
            setProduct({
                reference: 'PRD-002', name: 'Olive Oil', sku: 'OO-200', category: 'Oils', description: 'Extra virgin olive oil', image: '', brand: 'Bertolli', quantity: 20, unit: 'liter', cost_price: 8.0, selling_price: 12.0, discount: 0, tax_rate: 8, supplier_id: 'SUP-02', warehouse_location: 'B2', status: 'active', reorder_level: 5, barcode: '987654321098', expiration_date: '2026-06-30',
            });
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setProduct({ ...product, [name]: URL.createObjectURL(files[0]) });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Product Updated Successfully');
        router('/product/list');
    };

    const InputField = ({ label, name, type = "text", ...rest }) => (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                type={type}
                name={name}
                value={product[name]}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...rest}
            />
        </div>
    );

    return (
        <Layout>
            <div className="px-4 py-2">
                <Card className="mb-6 px-4 py-2 text-xl font-semibold text-gray-800">Edit Product</Card>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <InputField label="Reference" name="reference" required />
                    <InputField label="Name" name="name" required />
                    <InputField label="SKU" name="sku" required />
                    <InputField label="Category" name="category" required />
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Description</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <InputField label="Brand" name="brand" />
                    <InputField label="Quantity" name="quantity" type="number" min="0" required />
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">Unit</label>
                        <select
                            name="unit"
                            value={product.unit}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select unit</option>
                            <option value="pcs">pcs</option>
                            <option value="kg">kg</option>
                            <option value="liter">liter</option>
                        </select>
                    </div>
                    <InputField label="Cost Price" name="cost_price" type="number" min="0" step="0.01" required />
                    <InputField label="Selling Price" name="selling_price" type="number" min="0" step="0.01" required />
                    <InputField label="Discount (%)" name="discount" type="number" min="0" max="100" step="0.01" />
                    <InputField label="Tax Rate (%)" name="tax_rate" type="number" min="0" max="100" step="0.01" />
                    <InputField label="Supplier ID" name="supplier_id" />
                    <InputField label="Warehouse Location" name="warehouse_location" />
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                            name="status"
                            value={product.status}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="inactive">In Stock</option>
                            <option value="out of stock">Out of Stock</option>
                        </select>
                    </div>
                    <InputField label="Reorder Level" name="reorder_level" type="number" min="0" />
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            Barcode
                            <span className="ml-2 text-xs text-gray-400">(Scan or enter manually)</span>
                        </label>
                        <input
                            type="text"
                            name="barcode"
                            value={product.barcode}
                            onChange={handleChange}
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            ref={barcodeRef}
                        />
                    </div>
                    <InputField label="Expiration Date" name="expiration_date" type="date" />

                    {/* Move Image input to the last field */}
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {product.image && (
                            <img src={product.image} alt="Preview" className="mt-2 h-16 w-16 object-cover rounded-md" />
                        )}
                    </div>

                    <div className="md:col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
                        >
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
