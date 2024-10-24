import React from 'react';
import SalesSummaryCard from './components/sales-card';
import CustomerSummaryCard from './components/customer-card';
import OrderSummaryCard from './components/order-card';
import Sidebar from './components/nav';
import Header from './components/header';
import Footer from './components/footer';
import Layout from './layout';

const HomePage = () => {
  return (
    <Layout>

      {/* Sample Cards or Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <div className='col-span-2 xl:col-span-2 2xl:col-span-3 pl-4'>
          <SalesSummaryCard />
        </div>

        <div className='col-span-2 xl:col-span-2 2xl:col-span-2 pr-4'>
          <OrderSummaryCard />
        </div>

        <div className="col-span-2 pl-4">
          <div className='bg-white p-5 rounded-lg shadow-md xl:min-h-[380px] 2xl:min-h-[360px]'>
            <h3 className="text-xl font-semibold">Employee Management</h3>
            <p>Manage your employees efficiently.</p>
            <div className='mt-3'>
              <img
                src='/public/Screenshot 2024-10-24 203352.png'  // Replace with your logo URL or import
                alt="employee chart"
                className="h-auto w-full"
                style={{
                  objectFit: 'contain',
                  height: '250px'
                }}
              />
            </div>
          </div>
        </div>

        <div className='col-span-2 2xl:col-span-2'>
          <CustomerSummaryCard />
        </div>

        <div className="xl:col-span-2 2xl:col-span-1 xl:pl-4 2xl:pl-0 2xl:pr-4">
          <div className='bg-white p-5 rounded-lg shadow-md min-h-[360px]'>
            <h3 className="text-xl font-semibold">Delivery Management</h3>
            <p>Manage your delivery efficiently.</p>
            <div className='mt-3'>
              <img
                src='/public/Screenshot 2024-10-24 202851.png'  // Replace with your logo URL or import
                alt="delivery chart"
                className="h-auto w-full"
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;