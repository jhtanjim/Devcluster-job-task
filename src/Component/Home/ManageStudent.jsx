import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // For the icons

const ManageStudent = () => {
    const students = [
        { name: 'Bruce Banner', class: 'VI-A', rollNo: 12 },
        { name: 'Doctor Strange', class: 'VII-A', rollNo: 13 },
        { name: 'Scarlet Witch', class: 'VII-B', rollNo: 14 },
        { name: 'Captain America', class: 'VIII-A', rollNo: 15 },
        { name: 'Black Widow', class: 'VI-A', rollNo: 16 },
    ];

    return (
        <div className="mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Manage Students</h2>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border p-2 rounded-md"
                    />
                    <button className="border px-4 py-5 rounded-md">Export</button>
                    <button className="border px-4 py-5 rounded-md">Filter</button>
                    <button className="border px-4 py-5 rounded-md">Print</button>
                    <span>{new Date().toLocaleString()}</span>
                </div>
            </div>

            <table className="w-full text-center border-collapse">
                <thead>
                    <tr className="bg-red-500 text-white">
                        <th className="py-5 px-4">Name</th>
                        <th className="py-5 px-4">Class</th>
                        <th className="py-5 px-4">Roll No.</th>
                        <th className="py-5 px-4">View / Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className="odd:bg-red-50 even:bg-white">
                            <td className="py-5 px-4">{student.name}</td>
                            <td className="py-5 px-4">{student.class}</td>
                            <td className="py-5 px-4">{student.rollNo}</td>
                            <td className="py-5 px-4 flex justify-center space-x-4">
                                <FaEye className="cursor-pointer text-red-500" />
                                <FaEdit className="cursor-pointer text-red-500" />
                                <FaTrash className="cursor-pointer text-red-500" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudent;
