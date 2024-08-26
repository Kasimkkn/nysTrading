import React from 'react';
import p1 from '../assets/img/p1.png';
import p2 from '../assets/img/p2.png';
import p3 from '../assets/img/p3.png';
import p4 from '../assets/img/p4.png';
import p5 from '../assets/img/p5.jpg';
import p6 from '../assets/img/p6.jpg';
import p7 from '../assets/img/p7.jpg';
import p8 from '../assets/img/p8.jpg';
import p9 from '../assets/img/p9.jpg';

const OurServices = () => {
    const services = [
        { title: 'Custom Clearing', image: p1 },
        { title: 'Sea Freight', image: p2 },
        { title: 'Air Freight', image: p3 },
        { title: 'Freight Forwarder', image: p4 },
        { title: 'Warehousing', image: p5 },
        { title: 'Project Cargo', image: p6 },
        { title: 'Breakbulk', image: p7 },
        { title: 'Export Import', image: p8 },
        { title: 'Reefer Cargo', image: p9 },
    ];

    return (
        <section id="services" className="py-6 bg-gray-100 px-12">
            <div className="text-center mb-12">
                <h2 className="text-lg text-text-color font-bold inline-block px-4 py-1 border-2 border-red-500 border-t-0 rounded-lg">
                    OUR
                </h2>
                <h3 className="text-4xl text-dark-blue font-bold mt-4">SERVICES</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="service-card bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover max-md:h-36" />
                        <div className="p-4">
                            <a href="#" className="text-text-color font-bold block">READ MORE</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
