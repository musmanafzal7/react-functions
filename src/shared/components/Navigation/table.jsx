import React from 'react';
import './table.css';
const Table = ({ data, columns }) => {
    return (
        <>
            <div className="formController">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg  overflow-hidden ">
                            <table className="min-w-full divide-y  ">
                                <thead >
                                    <tr>
                                        {columns.map((column) => (
                                            <th
                                                key={column.accessor}
                                                className="text-start py-4 px-3"
                                            >
                                                {column.Header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((row, rowIndex) => (
                                        <tr key={rowIndex} className=' odd:bg_white even:bg-gray-100 border-b'>
                                            {columns.map((column) => (
                                                <td key={column.accessor} className="p-3">
                                                    {column.accessor == "action" ? (
                                                          <button
                                                          className="bg-blue-500 text-white py-1 px-3 rounded"
                                                          onClick={() => handleButtonClick(row)}
                                                      >
                                                          Action
                                                      </button>
                                                    ) : (
                                                        row[column.accessor]
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
