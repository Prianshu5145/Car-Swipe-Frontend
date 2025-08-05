import React from 'react';
import { Link } from 'react-router-dom';

const actions = [
  {
    title: 'Sell Car',
    icon: 'https://res.cloudinary.com/dztz5ltuq/image/upload/v1754378435/download__1_-removebg-preview_cncaze.png',
    link: '/sell',
  },
  {
    title: 'Buy Car',
    icon: 'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750064596/give_gifts_09-removebg-preview_kz31pc.png',
    link: '/buy-car',
  },
  {
    title: 'Car Loan',
    icon: 'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750063803/images_2_rah53b.jpg',
    link: '/car-loan',
  },
  {
    title: 'Exchange Car',
    icon: 'https://res.cloudinary.com/dztz5ltuq/image/upload/v1754380873/download__2_-removebg-preview_utsi4v.png',
    link: '/ExchangeCar',
  },
];

export default function CarActionCard() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <Link to={action.link} key={index}>
            <div className="group bg-white/80 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-center hover:scale-105">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3">
                <img
                  src={action.icon}
                  alt={action.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 text-center">
                {action.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
