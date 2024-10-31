import React, { useState } from 'react';
import Layout from '../layout';
import Card from '../custom-components/card';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function NewEmployee() {
    const router = useNavigate()
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        position: '',
        department: '',
        startDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        toast.success('Employee Added Successfully')
        e.preventDefault();
        setEmployee({ name: '', email: '', position: '', department: '', startDate: '' }); // Reset form after submission
        router('/employees/list')
    };

    return (
        <Layout>

            <div className='px-4'>
                <Card className=" p-4 text-gray-700 text-xl font-semibold mb-4">Add New Employee</Card>
                <form onSubmit={handleSubmit} className="w-2/3 p-6 bg-white shadow-md rounded">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="position" className="block text-gray-700 font-medium mb-1">Position</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={employee.position}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700 font-medium mb-1">Department</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-gray-700 font-medium mb-1">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={employee.startDate}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div className='flex justify-end'>
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                            Add Employee
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
