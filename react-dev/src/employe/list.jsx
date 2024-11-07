import React from 'react';
import Table from '../custom-components/table';
import Layout from '../layout';

export default function EmployeeTable() {
const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name', width: '20%' },
        { title: 'Email', dataIndex: 'email', key: 'email', width: '20%' },
        { title: 'Position', dataIndex: 'position', key: 'position', width: '20%' },
        { title: 'Department', dataIndex: 'department', key: 'department', width: '20%' },
        { title: 'Start Date', dataIndex: 'startDate', key: 'startDate', width: '20%' },
    ];


    const data = [
        { key: '1', name: 'John Doe', email: 'john@example.com', position: 'Developer', department: 'Engineering', startDate: '2024-01-15' },
        { key: '2', name: 'Jane Smith', email: 'jane@example.com', position: 'Designer', department: 'Creative', startDate: '2023-09-21' },
        { key: '3', name: 'Alice Johnson', email: 'alice@example.com', position: 'Project Manager', department: 'Operations', startDate: '2023-05-11' },
    ];

    return (
        <Layout>
            <div className='px-4'>
                <div className="p-6 bg-white shadow-md rounded">
                    <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
                    <Table columns={columns} data={data} className="" />
                </div>
            </div>
        </Layout>
    );
}