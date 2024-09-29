import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // For the icons
import { useLoaderData } from 'react-router-dom';
import EditStudent from './EditStudent';
import StudentDetails from './StudentDetails'; // Import the new component
import Swal from 'sweetalert2';

const ManageStudent = () => {
    const initialStudents = useLoaderData();
    const [students, setStudents] = useState(initialStudents);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // New state for details modal
    const [currentStudent, setCurrentStudent] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // Search state
    const [selectedClass, setSelectedClass] = useState(''); // Filter by class state

    const handleEditClick = (student) => {
        setCurrentStudent(student);
        setIsEditModalOpen(true);
    };

    const handleDetailsClick = (student) => {
        setCurrentStudent(student);
        setIsDetailsModalOpen(true); // Open details modal
    };

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/students/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const updatedStudents = students.filter(student => student._id !== _id);
                            setStudents(updatedStudents);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    // Filter students based on search and class
    const filteredStudents = students.filter(student => {
        const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`.toLowerCase();
        const searchMatch = fullName.includes(searchQuery.toLowerCase()) || student.rollNumber.toString().includes(searchQuery);
        const classMatch = selectedClass ? student.class === selectedClass : true; // If class is selected, match it
        return searchMatch && classMatch;
    });

    return (
        <div className="mx-auto my-12 px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
                <h2 className="text-xl font-semibold">Manage Students</h2>
                <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto space-y-4 sm:space-y-0">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by Name or Roll No."
                        className="border p-2 rounded-md w-full sm:w-auto"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search state
                    />
                    {/* Filter by Class */}
                    <select
                        className="border p-2 rounded-md"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)} // Update class filter state
                    >
                        <option value="">All Classes</option>
                        <option value="Class VI">Class VI</option> {/* New class options */}
    <option value="Class VII">Class VII</option> {/* New class options */}
    <option value="Class VIII">Class VIII</option> {/* New class options */}
                        {/* Add more class options as needed */}
                    </select>
                    <button className="border px-4 py-2 rounded-md">Export</button>
                    <button className="border px-4 py-2 rounded-md">Print</button>
                    <span className='mt-2 sm:mt-0 sm:ml-4'>{new Date().toLocaleString()}</span>
                </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr className="bg-red-500 text-white">
                            <th className="py-5 px-4">Name</th>
                            <th className="py-5 px-4">Class</th>
                            <th className="py-5 px-4">Roll No.</th>
                            <th className="py-5 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student._id} className="odd:bg-red-50 even:bg-white">
                                <td className="py-5 px-4">{`${student.firstName} ${student.middleName} ${student.lastName}`}</td>
                                <td className="py-5 px-4">{student.class}</td>
                                <td className="py-5 px-4">{student.rollNumber}</td>
                                <td className="py-5 px-4 flex justify-center space-x-2">
                                    <FaEye 
                                        className="cursor-pointer text-red-500" 
                                        onClick={() => handleDetailsClick(student)} // Show details on click
                                    />
                                    <FaEdit 
                                        className="cursor-pointer text-red-500" 
                                        onClick={() => handleEditClick(student)} 
                                    />
                                    <FaTrash 
                                        onClick={() => handleDelete(student._id)} 
                                        className="cursor-pointer text-red-500" 
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Editing Student */}
            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md">
                        <EditStudent student={currentStudent} onClose={() => setIsEditModalOpen(false)} />
                    </div>
                </div>
            )}

            {/* Modal for Viewing Student Details */}
            {isDetailsModalOpen && currentStudent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <StudentDetails student={currentStudent} onClose={() => setIsDetailsModalOpen(false)} />
                </div>
            )}
        </div>
    );
};

export default ManageStudent;
