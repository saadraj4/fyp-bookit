import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../admin/Sidebar';

const RequestsComponent = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await axios.get('http://localhost:80/contact/getAllRequests'); // Assuming this endpoint returns all requests
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    return (
        <>
            <div className='flex'>
                <div><Sidebar /></div>
                
                <div className='flex-1 p-6'>
                    <table className='min-w-full bg-white border border-gray-400'>
                        <thead>
                            <tr className='bg-gray-200 border-b-2 border-gray-400'>
                                <th className='py-2 px-4 border-r-2 border-gray-400 text-left'>Name</th>
                                <th className='py-2 px-4 border-r-2 border-gray-400 text-left'>Email</th>
                                <th className='py-2 px-4 text-left'>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(request => (
                                <tr key={request.id} className='border-b-2 border-gray-400 hover:bg-gray-50'>
                                    <td className='py-2 px-4 border-r-2 border-gray-400'>{request.name}</td>
                                    <td className='py-2 px-4 border-r-2 border-gray-400'>{request.email}</td>
                                    <td className='py-2 px-4'>{request.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

};

export default RequestsComponent;
