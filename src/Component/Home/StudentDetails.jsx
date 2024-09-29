import React from 'react';

const StudentDetails = ({ student, onClose }) => {
    return (
        <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-semibold">Student Details</h2>
            <p><strong>Name:</strong> {`${student.firstName} ${student.middleName} ${student.lastName}`}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Roll No:</strong> {student.rollNumber}</p>
            <p><strong>Address:</strong> {student.addressLine1}, {student.addressLine2}, {student.city}, {student.pincode}</p>
            <button onClick={onClose} className="mt-4 border px-4 py-2 rounded-md">Close</button>
        </div>
    );
};

export default StudentDetails;
