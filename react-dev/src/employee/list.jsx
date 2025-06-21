import React from 'react';
import Table from '../custom-components/table';
import Layout from '../layout';
import { AiOutlineEdit } from 'react-icons/ai';

export default function EmployeeTable() {
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id', width: '10%' },
        { title: 'Name', dataIndex: 'name', key: 'name', width: '20%' },
        { title: 'Email', dataIndex: 'email', key: 'email', width: '20%' },
        { title: 'Position', dataIndex: 'position', key: 'position', width: '20%' },
        { title: 'Department', dataIndex: 'department', key: 'department', width: '20%' },
        { title: 'Start Date', dataIndex: 'startDate', key: 'startDate', width: '20%' },
        {
            title: 'Edit',
            key: 'edit',
            width: '6%',
            render: (value, record) => (
                <button
                    className="text-teal-600 hover:text-teal-800"
                    onClick={() => navigate(`/employee/edit/${record.id}`)}
                    title="Edit Product"
                >
                    <AiOutlineEdit size={22} />
                </button>
            ),
        },
    ];

    const data = [
        { id: '1', name: 'John Doe', email: 'john@example.com', position: 'Developer', department: 'Engineering', startDate: '2024-01-15' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', position: 'Designer', department: 'Creative', startDate: '2023-09-21' },
        { id: '3', name: 'Alice Johnson', email: 'alice@example.com', position: 'Project Manager', department: 'Operations', startDate: '2023-05-11' },
        { id: '4', name: 'Bob Brown', email: 'bob@example.com', position: 'QA Engineer', department: 'Engineering', startDate: '2022-12-01' },
        { id: '5', name: 'Carol White', email: 'carol@example.com', position: 'HR Manager', department: 'Human Resources', startDate: '2021-08-19' },
        { id: '6', name: 'David Green', email: 'david@example.com', position: 'Support Specialist', department: 'Customer Service', startDate: '2023-03-10' },
        { id: '7', name: 'Eva Black', email: 'eva@example.com', position: 'Marketing Lead', department: 'Marketing', startDate: '2022-07-25' },
        { id: '8', name: 'Frank Blue', email: 'frank@example.com', position: 'Sales Executive', department: 'Sales', startDate: '2023-11-05' },
        { id: '9', name: 'Grace Red', email: 'grace@example.com', position: 'Content Writer', department: 'Creative', startDate: '2023-02-14' },
        { id: '10', name: 'Henry Gold', email: 'henry@example.com', position: 'Accountant', department: 'Finance', startDate: '2022-10-30' },
        { id: '11', name: 'Ivy Silver', email: 'ivy@example.com', position: 'UI/UX Designer', department: 'Creative', startDate: '2023-06-18' },
        { id: '12', name: 'Jack Orange', email: 'jack@example.com', position: 'Business Analyst', department: 'Operations', startDate: '2021-12-22' },
        { id: '13', name: 'Kathy Violet', email: 'kathy@example.com', position: 'Recruiter', department: 'Human Resources', startDate: '2022-04-09' },
        { id: '14', name: 'Leo Indigo', email: 'leo@example.com', position: 'DevOps Engineer', department: 'Engineering', startDate: '2023-08-13' },
        { id: '15', name: 'Mona Pink', email: 'mona@example.com', position: 'Office Manager', department: 'Administration', startDate: '2022-09-27' },
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