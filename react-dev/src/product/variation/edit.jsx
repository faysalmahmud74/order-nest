import React, { useState, useRef, useEffect } from 'react';
import Layout from '../../layout';
import Card from '../../custom-components/card';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

// Example variant data (replace with API call in real app)
const variantData = [
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

// Dummy product data for edit (replace with real fetch in production)
const productData = [
    {
        id: '101',
        reference: 'PRD-101',
        name: 'Sample Product',
        sku: 'SP-001',
        category: 'TestCat',
        description: 'Sample description',
        image: '',
        brand: 'BrandX',
        unit: 'pcs',
        cost_price: '10',
        selling_price: '15',
        discount: '5',
        tax_rate: '8',
        supplier_id: 'SUP-1',
        warehouse_location: 'A1',
        barcode: '123456',
        expiration_date: '2026-01-01',
        assignedVariants: {
            '1': ['1'], // Test: Red
            '2': ['2'], // Size: Small
        },
    },
];

function getPermutations(arrays) {
    if (!arrays.length) return [];
    return arrays.reduce((acc, curr) => {
        const res = [];
        acc.forEach(a => {
            curr.forEach(b => {
                res.push([...a, b]);
            });
        });
        return res;
    }, [[]]);
}

export default function EditProduct() {
    const router = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        reference: '', name: '', sku: '', category: '', description: '', image: '', brand: '', unit: '', cost_price: '', selling_price: '', discount: '', tax_rate: '', supplier_id: '', warehouse_location: '', barcode: '', expiration_date: '',
    });
    const [assignedValues, setAssignedValues] = useState({});
    const [selectedVariantId, setSelectedVariantId] = useState('');
    const barcodeRef = useRef(null);

    useEffect(() => {
        // Simulate fetch by id
        const found = productData.find(p => p.id === id);
        if (found) {
            setProduct({ ...found });
            setAssignedValues(found.assignedVariants || {});
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setProduct({ ...product, [name]: URL.createObjectURL(files[0]) });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleVariantSelect = (e) => {
        setSelectedVariantId(e.target.value);
    };

    const handleValueToggle = (variantId, valueId) => {
        setAssignedValues(prev => {
            const current = prev[variantId] || [];
            if (current.includes(valueId)) {
                return { ...prev, [variantId]: current.filter(id => id !== valueId) };
            } else {
                return { ...prev, [variantId]: [...current, valueId] };
            }
        });
    };

    // Prepare permutations
    const selectedArrays = variantData
        .map(variant => (assignedValues[variant.id] || []).map(valId => ({
            variant: variant.name,
            value: variant.values.find(v => v.id === valId)?.value || ''
        })))
        .filter(arr => arr.length > 0);
    const permutations = getPermutations(selectedArrays);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Product Updated Successfully');
        // Add assigned variants to product data
        const selectedVariants = Object.entries(assignedValues).map(([variantId, valueIds]) => {
            const variant = variantData.find(v => v.id === variantId);
            return {
                id: variant.id,
                name: variant.name,
                values: variant.values.filter(v => valueIds.includes(v.id)),
            };
        });
        console.log('Assigned Variants:', selectedVariants);
        // router('/product/list');
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
                    {/* Variant Dropdown and Value Assignment */}
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1">Assign Product Variants</label>
                        <select
                            value={selectedVariantId}
                            onChange={handleVariantSelect}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                        >
                            <option value="">Select a variant</option>
                            {variantData.map(variant => (
                                <option key={variant.id} value={variant.id}>{variant.name}</option>
                            ))}
                        </select>
                        {selectedVariantId && (
                            <div className="flex flex-wrap gap-4 pl-2">
                                {variantData.find(v => v.id === selectedVariantId)?.values.map(item => (
                                    <label key={item.id} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={(assignedValues[selectedVariantId] || []).includes(item.id)}
                                            onChange={() => handleValueToggle(selectedVariantId, item.id)}
                                            className="accent-blue-600"
                                        />
                                        {item.image ? (
                                            <img src={item.image} alt={item.value} className="h-7 w-7 object-cover rounded-full" />
                                        ) : (
                                            <span className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-400 text-xs">No Img</span>
                                        )}
                                        <span className="font-medium text-gray-700">{item.value}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Permutations Preview */}
                    {permutations.length > 0 && (
                        <div className="md:col-span-2 mt-4">
                            <label className="text-sm font-medium text-gray-700 mb-1">Variant Combinations</label>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border text-sm mt-2">
                                    <thead>
                                        <tr>
                                            {variantData.filter(v => (assignedValues[v.id] || []).length > 0).map(v => (
                                                <th key={v.id} className="border px-3 py-1 bg-gray-100">{v.name}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {permutations.map((combo, idx) => (
                                            <tr key={idx}>
                                                {combo.map((c, i) => (
                                                    <td key={i} className="border px-3 py-1">{c.value}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
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
