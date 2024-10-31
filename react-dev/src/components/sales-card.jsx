import React from 'react';

const SalesSummaryCard = () => {
    const data = [
        {
            id: 1,
            title: 'Total Sales',
            value: '$1k',
            growth: '+8% from yesterday',
            bgColor: 'bg-red-100',
            textColor: 'text-red-600',
            icon: '📊',
        },
        {
            id: 2,
            title: 'Total Orders',
            value: '300',
            growth: '+5% from yesterday',
            bgColor: 'bg-yellow-100',
            textColor: 'text-yellow-600',
            icon: '📝',
        },
        {
            id: 3,
            title: 'Product Sold',
            value: '5',
            growth: '+1.2% from yesterday',
            bgColor: 'bg-green-100',
            textColor: 'text-green-600',
            icon: '✅',
        },
        {
            id: 4,
            title: 'New Customers',
            value: '8',
            growth: '+0.5% from yesterday',
            bgColor: 'bg-purple-100',
            textColor: 'text-purple-600',
            icon: '👥',
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-md mx-auto min-h-[320px]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Today's Sales</h2>
                <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100">
                    Export
                </button>
            </div>
            <p className="text-gray-500 mb-4">Sales Summary</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 rounded-lg flex flex-col items-center justify-between ${item.bgColor}`}
                    >
                        <div className="text-4xl">{item.icon}</div>
                        <div className={`text-2xl font-bold mt-2 ${item.textColor}`}>
                            {item.value}
                        </div>
                        <p className="text-gray-600 text-lg mt-1">{item.title}</p>
                        <p className={`text-sm ${item.textColor} mt-1`}>{item.growth}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesSummaryCard;