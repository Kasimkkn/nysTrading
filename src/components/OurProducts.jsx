import React from 'react';
import p1 from '../assets/img/BRASS.jpg';
import p2 from '../assets/img/ALUMINIUM-ARTWARE.jpg';
import p3 from '../assets/img/ARTIFICIAL-JEWELLERY.jpg';
import p4 from '../assets/img/Cotton-Puff.jpg';
import p5 from '../assets/img/Cotton-Rugs-Printed.jpg';
import p6 from '../assets/img/Wooden-Bench.jpg';
import p7 from '../assets/img/hand-tools.jpg';
import p8 from '../assets/img/JUTE-RUGS.png';
import p9 from '../assets/img/AUTO-PARTS.jpg';
const OurProducts = () => {
    const products = [
        { title: 'Brass ArtWare', image: p1 },
        { title: 'Aluminium ArtWare', image: p2 },
        { title: 'MIX METAL HANDICRAFT', image: p3 },
        { title: 'Cotton Puff', image: p4 },
        { title: 'Cotton Rugs Printed', image: p5 },
        { title: 'Wooden Bench with Shelf', image: p6 },
        { title: 'Hand Tools', image: p7 },
        { title: '100% JUTE RUGS', image: p8 },
        { title: 'JCB AUTO PARTS', image: p9 },
    ];

    return (
        <section id="products" className="py-8 bg-white px-12">
            <div className="text-center mb-12">
                <h2 className="text-lg text-text-color font-bold inline-block px-4 py-1 border-2 border-red-500 border-t-0 rounded-lg">
                    OUR
                </h2>
                <h3 className="text-4xl text-dark-blue font-bold mt-4 uppercase">products</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((prodcuts, index) => (
                    <div key={index} className="prodcuts-card bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                        <img src={prodcuts.image} alt={prodcuts.title} className="w-full h-48 object-cover max-md:h-36" />
                        <div className="p-4">
                            <a href="#" className="text-dark-blue uppercase text-lg font-bold block">{prodcuts.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProducts;
