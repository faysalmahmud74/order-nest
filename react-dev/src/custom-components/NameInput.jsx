import React from 'react';

export default function NameInput({ value, onChange, required }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                required={required}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
