import React from 'react';
import whyUs from '../assets/img/whyUs.png';
import cargoProject from '../assets/img/cargoProject.png';
import agency from '../assets/img/agency.png';
import icon1 from '../assets/img/icon-1.png';
import icon2 from '../assets/img/icon-2.png';
const AboutUs = () => {
    return (
        <section id="about" className="py-16 bg-gray-100 px-4 max-md:py-8">
            <div className="container mx-auto">
                {/* Choose Us Section */}
                <div className="flex flex-wrap mb-12">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-lg text-text-color font-bold inline-block px-4 py-1 border-2 border-red-500 border-t-0 rounded-lg">
                            OUR
                        </h2>
                        <h3 className="text-2xl uppercase text-dark-blue font-bold mt-4">Chooose Us?</h3>
                        <p className="text-lg my-4">
                            We offer you all kinds of services in Ruchicargo on account of the vast experience and expertise that we have gathered over the years. Our prime concern is to provide our clients an efficient service at the lowest total cost. We have also been registered as "Multimodal Transport Operator" under the "Multimodal Transportation of Goods Act 1933" and are certified member of WCA..!
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
                        <img src={whyUs} alt="Ruchi Cargo Agency" className="max-w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Cargo Project Section */}
                <div className="flex mb-12 max-md:flex-col-reverse max-md:flex-wrap">
                    <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
                        <img src={cargoProject} alt="Cargo" className="max-w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-lg text-text-color font-bold inline-block px-4 py-1 border-2 border-red-500 border-t-0 rounded-lg">
                            Project
                        </h2>
                        <h3 className="text-2xl uppercase text-dark-blue font-bold mt-4">CARGO</h3>
                        <p className="text-lg my-4">
                            Managing heavy lift projects requires special expertise, care, and detailing. We have built a formidable reputation in Project Cargo Logistics and heavy lift shipments with our dedicated operations team who have a thorough understanding of handling cargos with ports and customs. We offer innovative Project Cargo Handling solutions as well as technical engineering services to manage the project completely from start to finish, ensuring timely delivery of your valuable goods.
                        </p>
                    </div>
                </div>

                {/* Delivering Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg max-md:p-2 max-md:pt-4 ">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 px-4 max-md:w-full">
                            <h2 className="text-lg text-text-color font-bold inline-block px-4 py-1 border-2 border-red-500 border-t-0 rounded-lg">Delivering</h2>
                            <h3 className="my-4 text-3xl font-bold mb-4 max-md:text-xl">Our outsourcing logistics services address the critical challenges in the every industry and help companies improve last-mile delivery</h3>
                            <p className="text-lg mb-4 max-md:text-base">
                                Regardless of your industry, we provide you with supply chain and logistics expertise that is focused on your business. Our verticals below show how we can support your business and add value across your supply chain.
                            </p>
                            <div className="flex space-x-8">
                                <div className="flex items-center">
                                    <img src={icon1} alt="Icon" className="w-8 h-8 mr-2 max-md:w-12 max-md:h-12" />
                                    <span className='text-lg max-md:text-xs'>Unlimited Revisions & Best Solutions</span>
                                </div>
                                <div className="flex items-center">
                                    <img src={icon2} alt="Icon" className="w-8 h-8 mr-2 max-md:w-12 max-md:h-12" />
                                    <span className='text-lg max-md:text-xs'>24/7 Support For Any Clients</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-4 flex justify-center items-center max-md:my-4 max-md:w-full">
                            <img src={agency} alt="Logistics" className="max-w-full rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
