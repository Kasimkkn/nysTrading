import React, { useState, useEffect } from 'react';
import heroBg from '../assets/img/hero.png';
import panipatImage from '../assets/img/Panipat.jpg';
import hyderabadImage from '../assets/img/Hyderabad.jpg';
import suratImage from '../assets/img/surat.png';
import ludhianaImage from '../assets/img/Ludhiana.jpg';
import ahmedabadImage from '../assets/img/Ahmedabad.jpg';
import bangloreImage from '../assets/img/b.jpg';
import chennaiImage from '../assets/img/c.jpg';
import delhiImage from '../assets/img/d.jpg';
import mumbaiImage from '../assets/img/m.jpg';

const HeroSectionWithBranches = () => {
    const branches = [
        { name: 'Panipat', image: panipatImage },
        { name: 'Hyderabad', image: hyderabadImage },
        { name: 'Surat', image: suratImage },
        { name: 'Ludhiana', image: ludhianaImage },
        { name: 'Ahmedabad', image: ahmedabadImage },
        { name: 'Banglore', image: bangloreImage },
        { name: 'Chennai', image: chennaiImage },
        { name: 'Delhi', image: delhiImage },
        { name: 'Mumbai', image: mumbaiImage },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = window.innerWidth < 768 ? 1 : 3; // Adjust based on screen width

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % branches.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + branches.length) % branches.length);
    };

    useEffect(() => {
        const handleResize = () => {
            // Trigger a re-render when the window size changes
            setCurrentIndex(0);
        };

        const autoSlide = setInterval(nextSlide, 3500);
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(autoSlide);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="relative bg-cover bg-center h-[75vh]" style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center right' }}>
            {/* Dark-blue overlay */}
            <div className="absolute inset-0 bg-dark-blue opacity-60"></div>
            <div className="relative flex flex-col items-center py-16 px-4 z-10 h-full">
                <div className="text-left ml-20 self-start w-full md:w-2/3 max-md:ml-0 max-md:text-center">
                    <h1 className="text-4xl font-bold text-white">RUCHI CARGO AGENCY</h1>
                    <p className="mt-4 text-white">Ruchi Cargo Agency was established in 2009 and promoted by a group of shipping professionals...</p>
                    <div className="mt-8 flex justify-start space-x-4 max-md:justify-center">
                        <button className="bg-text-color text-white px-6 py-2 rounded">About Us</button>
                        <button className="bg-transparent border text-dark-blue bg-white px-6 py-2 rounded">Contact Us</button>
                    </div>
                </div>

                {/* Branches Slider Section */}
                <div className="relative -bottom-5 w-full md:w-3/4 rounded-md mt-20 bg-white p-6 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-lg text-text-color w-max font-bold inline-block px-4 py-1 border-2 border-red-500 border-t-0 rounded-lg">
                                OUR
                            </h2>
                            <h3 className="text-3xl text-dark-blue font-bold max-md:text-xl">BRANCHES</h3>
                        </div>
                        <div className="flex space-x-4">
                            <button onClick={prevSlide} className="bg-white text-text-color text-2xl shadow-lg px-3 py-1 rounded-lg">
                                ←
                            </button>
                            <button onClick={nextSlide} className="bg-white text-text-color text-2xl shadow-lg px-3 py-1 rounded-lg">
                                →
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                        >
                            {branches.map((branch, index) => (
                                <div key={index} className="w-1/3 flex-shrink-0 px-2 max-md:w-full">
                                    <div className="branch-card bg-dark-blue text-white rounded-lg shadow-lg overflow-hidden">
                                        <img src={branch.image} alt={branch.name} className="w-full object-cover h-48" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionWithBranches;
