import React from 'react';
import Table from '../custom-components/table';
import Layout from '../layout';

export default function InvoiceList() {
    // Full invoice object as dummy data
    const data = [
        {
            salesDate: '2025-06-21',
            reference: '',
            soldBy: '',
            items: [
                {
                    id: 1750490576717,
                    productId: 1,
                    name: 'Cotton T-Shirt (B10008)',
                    description: 'Test Description',
                    quantity: '5',
                    available: 99,
                    unit: 'pc',
                    price: 100,
                    discount: '10',
                    discountType: '%',
                    itemTotal: 450,
                },
            ],
            invoiceNote: 'This is invoice note',
            overallDiscount: '15',
        },
    ];

    // Map to table rows (one row per item)
    const tableData = data.flatMap((invoice, idx) =>
        invoice.items.map((item, itemIdx) => ({
            key: `${idx}-${itemIdx}`,
            invoiceId: item.id,
            product: item.name,
            quantity: item.quantity,
            unit: item.unit,
            price: item.price,
            discount: item.discount + (item.discountType || ''),
            total: item.itemTotal,
            date: invoice.salesDate,
            note: invoice.invoiceNote,
        }))
    );

    const columns = [
        { title: 'Invoice ID', dataIndex: 'invoiceId', key: 'invoiceId', width: '15%' },
        { title: 'Product', dataIndex: 'product', key: 'product', width: '25%' },
        { title: 'Quantity', dataIndex: 'quantity', key: 'quantity', width: '10%' },
        { title: 'Unit', dataIndex: 'unit', key: 'unit', width: '8%' },
        { title: 'Unit Price', dataIndex: 'price', key: 'price', width: '10%' },
        { title: 'Discount', dataIndex: 'discount', key: 'discount', width: '10%' },
        { title: 'Total', dataIndex: 'total', key: 'total', width: '10%' },
        { title: 'Date', dataIndex: 'date', key: 'date', width: '15%' },
        { title: 'Note', dataIndex: 'note', key: 'note', width: '15%' },
    ];

    return (
        <Layout>
            <div className='px-4'>
                <div className="p-6 bg-white shadow-md rounded">
                    <h2 className="text-2xl font-semibold mb-4">Invoice List</h2>
                    <Table columns={columns} data={tableData} className="" />
                </div>
            </div>
        </Layout>
    );
}
