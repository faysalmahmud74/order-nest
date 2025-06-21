import React, { useState } from 'react';
import RcTable from 'rc-table';

export default function Table({ columns, data, className = "", pageSize = 10 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const total = data?.length || 0;
    const totalPages = Math.ceil(total / pageSize);
    const paginatedData = data?.slice((currentPage - 1) * pageSize, currentPage * pageSize) || [];

    return (
        <div className={`overflow-x-auto ${className}`}>
            {total > 0 ? (
                <>
                    <RcTable
                        columns={columns}
                        data={paginatedData}
                        rowKey={(record) => record.id || record.key || Math.random()}
                        className='w-full'
                    />
                    <div className="flex justify-end items-center gap-2 mt-4">
                        <button
                            className="px-3 py-1 rounded border bg-gray-100 disabled:opacity-50"
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <span className="text-sm">Page {currentPage} of {totalPages}</span>
                        <button
                            className="px-3 py-1 rounded border bg-gray-100 disabled:opacity-50"
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <p>No data found!</p>
            )}
        </div>
    );
}