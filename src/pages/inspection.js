import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import statesData from "../utils/states.json";

const InspectionBooking = () => {
    const [formData, setFormData] = useState({
        name: '',
        vehicleNumber: '',
        mobileNumber: '',
        state: '',
        district: '',
        pincode: '',
        address: ''
    });

    const [loading, setLoading] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        if (selectedState) {
            const stateData = statesData.find((s) => s.state === selectedState);
            setDistricts(stateData ? stateData.districts : []);
        } else {
            setDistricts([]);
        }

        setFormData((prev) => ({
            ...prev,
            state: selectedState,
        }));
    }, [selectedState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        try {
            const response = await fetch('https://car-swipe-backend-production.up.railway.app/api/inspection', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your inspection is booked. We will contact you shortly.');
            } else {
                alert('Failed to book inspection. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
            <Navbar />

            {loading && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="h-16 w-16 border-4 border-t-transparent border-blue-400 rounded-full animate-spin"></div>
                </div>
            )}

            <div className="relative">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10"></div>
                <picture>
                    <source media="(min-width: 768px)" srcSet="https://res.cloudinary.com/dztz5ltuq/image/upload/v1750184359/mechanics-repairing-car-workshop_1_1_jvpq8s.jpg" />
                    <img
                        src="https://res.cloudinary.com/dztz5ltuq/image/upload/v1750184359/mechanics-repairing-car-workshop_1_1_jvpq8s.jpg"
                        alt="Hero"
                        className="w-full object-cover h-72 sm:h-96 brightness-75"
                    />
                </picture>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide drop-shadow-xl text-white">
                        Schedule Your Free Car Inspection
                    </h1>
                </div>
            </div>

            <div className="py-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Unlock the Best Value for Your Car!</h2>
                    <p className="text-lg text-gray-300">
                        Reserve your free inspection today and take the first step toward a hassle-free selling experience.
                    </p>
                </div>
            </div>

            <div className="py-16 bg-gray-900">
                <div className="container mx-auto px-6">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg mx-auto border border-gray-700"
                    >
                        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Inspection Booking Form</h2>

                        {['name', 'vehicleNumber', 'mobileNumber', 'pincode', 'address'].map((field, index) => (
                            <input
                                key={index}
                                type={field === 'mobileNumber' || field === 'pincode' ? 'tel' : 'text'}
                                name={field}
                                placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                            />
                        ))}

                        <select
                            className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                            onChange={(e) => setSelectedState(e.target.value)}
                            value={selectedState}
                        >
                            <option value="">-- Select State --</option>
                            {statesData.map((item) => (
                                <option key={item.state} value={item.state}>{item.state}</option>
                            ))}
                        </select>

                        {selectedState && (
                            <select
                                className="w-full p-4 mb-6 bg-gray-700 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                                value={formData.district}
                                onChange={(e) => setFormData((prev) => ({ ...prev, district: e.target.value }))}
                            >
                                <option value="">-- Select District --</option>
                                {districts.map((district) => (
                                    <option key={district} value={district}>{district}</option>
                                ))}
                            </select>
                        )}

                        <button
                            type="submit"
                            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition transform hover:scale-105"
                        >
                            Submit & Proceed
                        </button>
                    </form>
                </div>
            </div>

            <div className="py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Quick Inspection, Maximum Value</h2>
                    <p className="text-lg text-gray-300">
                        Don’t miss the chance to get the best offer—schedule now and our trusted experts will handle the rest.
                    </p>
                </div>
            </div>

            <div className="py-16 bg-gray-900">
    <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-10 text-white">Our Process is Simple</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                {
                    title: 'Book Inspection',
                    text: 'Enter your vehicle details and book a free car inspection at your convenience.',
                    bg: 'from-purple-700 to-purple-500'
                },
                {
                    title: 'Appointment Confirmation',
                    text: 'Our team will call to confirm your preferred time slot for inspection.',
                    bg: 'from-indigo-700 to-indigo-500'
                },
                {
                    title: 'Get the Best Price',
                    text: 'Our experts evaluate your car and help you get the top market value.',
                    bg: 'from-pink-600 to-red-500'
                },
                {
                    title: 'Seamless Documentation',
                    text: 'We handle all the paperwork and make the deal stress-free.',
                    bg: 'from-teal-600 to-emerald-500'
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className={`bg-gradient-to-br ${item.bg} p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform text-white`}
                >
                    <div className="w-12 h-12 bg-white text-black font-bold flex items-center justify-center rounded-full mb-4">
                        {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-white">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
</div>


            <Footer />
        </div>
    );
};

export default InspectionBooking;