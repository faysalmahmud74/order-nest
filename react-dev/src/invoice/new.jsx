import React, { useState } from 'react';
import Layout from '../layout';
import { FaGift } from 'react-icons/fa';

export default function NewInvoice() {
    // Dummy data for dropdowns and items
    const products = [
        { id: 1, name: 'Cotton T-Shirt (B10008)', available: 99, unit: 'pc', price: 100 },
        { id: 2, name: 'Denim Jeans (B20009)', available: 50, unit: 'pc', price: 250 },
        { id: 3, name: 'Sneakers (B30010)', available: 30, unit: 'pair', price: 500 }
    ];
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];

    // Track selected product for adding
    const [selectedProduct, setSelectedProduct] = useState('');

    const [form, setForm] = useState({
        salesDate: new Date().toISOString().slice(0, 10),
        reference: '',
        soldBy: '',
        items: [],
        invoiceNote: '',
        overallDiscount: 0
    });

    // Calculate totals
    const subTotal = form.items.reduce((sum, item) => sum + (Number(item.quantity) * Number(item.price)), 0);
    const discount = form.items.reduce((sum, item) => {
        const qty = Number(item.quantity) || 0;
        const price = Number(item.price) || 0;
        const disc = Number(item.discount) || 0;
        if (item.discountType === '%') {
            return sum + (qty * price * disc / 100);
        } else if (item.discountType === 'flat' || item.discountType === '৳') {
            return sum + disc;
        }
        return sum;
    }, 0);
    const overallDiscount = Number(form.overallDiscount) || 0;
    const vat = 0;
    const netTotal = subTotal - discount - overallDiscount + vat;

    // Handlers
    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Add selected product as a new item row automatically on select
    const handleProductSelect = (e) => {
        const productId = Number(e.target.value);
        setSelectedProduct(productId ? String(productId) : '');
        if (!productId) return;
        // Prevent duplicate products
        if (form.items.some(item => item.productId === productId)) return;
        const product = products.find(p => p.id === productId);
        if (!product) return;
        setForm({
            ...form,
            items: [
                ...form.items,
                {
                    id: Date.now(),
                    productId: product.id,
                    name: product.name,
                    description: '',
                    quantity: 1,
                    available: product.available,
                    unit: product.unit,
                    price: product.price,
                    discount: 0,
                    discountType: '%',
                    itemTotal: product.price
                }
            ]
        });
    };

    const handleItemChange = (idx, field, value) => {
        const items = [...form.items];
        items[idx][field] = value;
        // Update itemTotal
        let price = Number(items[idx].price) || 0;
        let qty = Number(items[idx].quantity) || 0;
        let disc = Number(items[idx].discount) || 0;
        let total = price * qty;
        if (items[idx].discountType === '%') {
            total -= (total * disc / 100);
        } else if (items[idx].discountType === 'flat' || items[idx].discountType === '৳') {
            total -= disc;
        }
        items[idx].itemTotal = total;
        setForm({ ...form, items });
    };

    // Remove item by index
    const handleRemoveItem = (idx) => {
        const items = form.items.filter((_, i) => i !== idx);
        setForm({ ...form, items });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Invoice Data:', form);
        alert('Invoice created!');
    };

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6">
                {/* Top Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 rounded-md shadow">
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name/Code</label>
                        <select
                            name="product"
                            value={selectedProduct}
                            onChange={handleProductSelect}
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Product</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Sales Date</label>
                        <input
                            type="date"
                            name="salesDate"
                            value={form.salesDate}
                            onChange={handleInput}
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Reference Code</label>
                        <input
                            type="text"
                            name="reference"
                            value={form.reference}
                            onChange={handleInput}
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Sold By</label>
                        <select
                            name="soldBy"
                            value={form.soldBy}
                            onChange={handleInput}
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select</option>
                            {users.map(u => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Items Table */}
                <div className="bg-white p-4 rounded-md shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-3 py-2">#</th>
                                    <th className="px-3 py-2">Item</th>
                                    <th className="px-3 py-2">Description</th>
                                    <th className="px-3 py-2">Quantity <span className="text-red-500">*</span></th>
                                    <th className="px-3 py-2">Sales Price <span className="text-red-500">*</span></th>
                                    <th className="px-3 py-2">Discount</th>
                                    <th className="px-3 py-2">Item Total</th>
                                    <th className="px-3 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {form.items.length === 0 ? (
                                    <tr><td colSpan={8} className="text-center py-4 text-gray-400">No items added</td></tr>
                                ) : form.items.map((item, idx) => (
                                    <tr key={item.id} className="border-t align-top">
                                        <td className="px-3 py-2">{idx + 1}</td>
                                        <td className="px-3 py-2 font-semibold">{item.name}</td>
                                        <td className="px-3 py-2">
                                            <input
                                                type="text"
                                                value={item.description}
                                                onChange={e => handleItemChange(idx, 'description', e.target.value)}
                                                className="border rounded-md px-2 py-1 w-full"
                                            />
                                        </td>
                                        <td className="px-3 py-2">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={e => handleItemChange(idx, 'quantity', e.target.value)}
                                                    className="border rounded-md px-2 py-1 w-20"
                                                />
                                                <div className="text-xs text-green-700">
                                                    Avail. <strong>{item.available}</strong> ({item.unit})
                                                </div>

                                            </div>
                                        </td>
                                        <td className="px-3 py-2">
                                            <input
                                                type="number"
                                                min="0"
                                                value={item.price}
                                                onChange={e => handleItemChange(idx, 'price', e.target.value)}
                                                className="border rounded-md px-2 py-1 w-20"
                                            />
                                        </td>
                                        <td className="px-3 py-2 flex items-center gap-2">
                                            <input
                                                type="number"
                                                min="0"
                                                value={item.discount}
                                                onChange={e => handleItemChange(idx, 'discount', e.target.value)}
                                                className="border rounded-md px-2 py-1 w-16"
                                            />
                                            <select
                                                value={item.discountType}
                                                onChange={e => handleItemChange(idx, 'discountType', e.target.value)}
                                                className="border rounded-md px-1 py-1"
                                            >
                                                <option value="%">%</option>
                                                <option value="flat">৳</option>
                                            </select>
                                        </td>
                                        <td className="px-3 py-2">{item.itemTotal.toFixed(2)}</td>
                                        <td className="px-3 py-2 text-center">
                                            <button type="button" className="text-gray-400 hover:text-red-500 text-lg" onClick={() => handleRemoveItem(idx)}>&times;</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Invoice Note */}
                    <div className="mt-4">
                        <textarea
                            placeholder="Invoice Note"
                            value={form.invoiceNote}
                            onChange={e => setForm({ ...form, invoiceNote: e.target.value })}
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            rows={3}
                        />
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col md:flex-row justify-end gap-8 mt-4">
                        <div className="w-full md:w-1/3 bg-gray-50 rounded-md p-4 border">
                            <div className="flex justify-between py-1 text-sm">
                                <span>Sub Total</span>
                                <span>{subTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between py-1 text-sm">
                                <span>Discount</span>
                                <span>{discount?.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center py-1 text-sm">
                                <span>Overall Discount</span>
                                <input
                                    type="number"
                                    name="overallDiscount"
                                    value={form.overallDiscount}
                                    onChange={handleInput}
                                    className="border rounded-md px-2 py-1 w-20 text-right bg-gray-100"
                                />
                            </div>
                            <div className="flex justify-between py-1 text-sm">
                                <span>VAT</span>
                                <span>{vat.toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Net Total</span>
                                <span>{netTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
