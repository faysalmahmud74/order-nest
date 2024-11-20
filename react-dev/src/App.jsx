import React from 'react';
import SalesSummaryCard from './components/sales-card';
import CustomerSummaryCard from './components/customer-card';
import OrderSummaryCard from './components/order-card';
import Sidebar from './components/nav';
import Header from './components/header';
import Footer from './components/footer';
import Layout from './layout';
import EmployeeCard from './components/employee-card';
import DeliveryGraph from './components/delivery-card';

const HomePage = () => {
  return (
    <Layout>

      {/* Sample Cards or Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-y-4 lg:gap-4 xl:gap-4 2xl:gap-4">
        <div className='col-span-2 xl:col-span-2 2xl:col-span-3 pl-0 lg:pl-4 xl:pl-4 2xl:pl-4'>
          <SalesSummaryCard />
        </div>

        <div className='col-span-2 xl:col-span-2 2xl:col-span-3 pr-0 lg:pr-4 xl:pr-4 2xl:pr-4'>
          <OrderSummaryCard />
        </div>

        <div className="col-span-2 pl-0 lg:pl-4 xl:pl-4 2xl:pl-4">
          <EmployeeCard />
        </div>

        <div className='col-span-2 2xl:col-span-2'>
          <CustomerSummaryCard />
        </div>

        <div className="xl:col-span-2 2xl:col-span-2 xl:pl-4 2xl:pl-0 2xl:pr-4">
          <DeliveryGraph />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;