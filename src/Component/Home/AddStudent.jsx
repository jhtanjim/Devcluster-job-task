import React from 'react';

const AddStudent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Extracting form data
        const student = {
            firstName: formData.get('firstName'),
            middleName: formData.get('middleName'),
            lastName: formData.get('lastName'),
            class: formData.get('class'),
            division: formData.get('division'),
            rollNumber: formData.get('rollNumber'),
            addressLine1: formData.get('addressLine1'),
            addressLine2: formData.get('addressLine2'),
            landmark: formData.get('landmark'),
            city: formData.get('city'),
            pincode: formData.get('pincode'),
        };

        console.log('Student Data:', student);
    };

    return (
        <div className="p-6 bg-white border my-4 rounded-md">
            <h2 className="text-xl font-semibold mb-6">Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="border p-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="middleName"
                        placeholder="Middle Name"
                        className="border p-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select name="class" className="border p-2 rounded-md w-full">
                        <option>Select Class</option>
                        <option>Class VI</option>
                        <option>Class VII</option>
                        <option>Class VIII</option>
                    </select>
                    <select name="division" className="border p-2 rounded-md w-full">
                        <option>Select Division</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    <input
                        type="text"
                        name="rollNumber"
                        placeholder="Enter Roll Number in Digits"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="addressLine1"
                        placeholder="Address Line 1"
                        className="border p-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="addressLine2"
                        placeholder="Address Line 2"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input
                        type="text"
                        name="landmark"
                        placeholder="Landmark"
                        className="border p-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="border p-2 rounded-md w-full"
                    />
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-200"
                >
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
