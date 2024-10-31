import React from 'react';
import RcTable from 'rc-table';

export default function Table({ columns, data, className = "" }) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            {data?.length > 0 ?
                (<RcTable
                    columns={columns}
                    data={data}
                    rowKey={(record) => record.id || record.key || Math.random()}
                    className='w-full'
                />) : (
                    <p>No data found!</p>
                )
            }
        </div>
    );
}