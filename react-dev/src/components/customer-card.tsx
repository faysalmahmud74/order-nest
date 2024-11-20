import React from 'react';

const CustomerSummaryCard = () => {
  const data = [
    {
      id: 1,
      title: 'Total Customers',
      value: '500',
      growth: '+2% from yesterday',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      icon: '👥',
    },
    {
      id: 2,
      title: 'New Signups',
      value: '15',
      growth: '+3.5% from yesterday',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      icon: '📝',
    },
    {
      id: 3,
      title: 'Returning Customers',
      value: '120',
      growth: '+1.8% from yesterday',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      icon: '🔄',
    },
    {
      id: 4,
      title: 'Churn Rate',
      value: '1.5%',
      growth: '0.2% from yesterday',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      icon: '📉',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg min-h-[405px]">
      <h2 className="text-lg font-semibold">Customer Summary</h2>
      <p className="text-gray-500">Overview of customer activity</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {data.map((item) => (
          <div
            key={item.id}
            className={`p-4 ${item.bgColor} rounded-lg flex flex-col items-start justify-between`}
          >
            <div className="text-2xl">{item.icon}</div>
            <div className={`text-3xl font-bold ${item.textColor}`}>
              {item.value}
            </div>
            <p className="text-gray-500">{item.title}</p>
            <p className={`text-sm ${item.textColor}`}>{item.growth}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Export
      </button>
    </div>
  );
};

export default CustomerSummaryCard;