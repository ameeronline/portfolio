import React, { useState } from "react";
import FormOverlay from "../FormOverlay/FormOverlay";
import './Services.css';

function Services() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleDownloadClick = () => {
        setIsFormVisible(true); // Show the form overlay
    };

    const handleFormSubmit = (details) => {
        setIsFormVisible(false); // Hide the form overlay
        console.log("Form submitted successfully:", details); // Optional logging
    };

    return (
        <div className="services-section">
            <h2>What do I do!</h2>
            <div className="services">
                <div className="service">
                    <h3>Full Stack Development</h3>
                    <hr />
                    <p>Embarking on comprehensive Full Stack Development, I leverage the power of the MERN stack — MongoDB, Express.js, React, and Node.js. From designing dynamic user interfaces with React to building robust server-side logic with Node.js, I ensure end-to-end development that results in seamless and efficient applications.</p>
                </div>
                <div className="service">
                    <h3>Back-end Development</h3>
                    <hr />
                    <p>Specializing in Back-end Development using Node.js, I architect the server-side of applications. Employing the versatility and scalability of Node.js, I manage databases, servers, and ensure data flows seamlessly. My focus is on creating secure and high-performance back-end systems that form the backbone of web applications.</p>
                </div>
                <div className="service">
                    <h3>Front-end Development</h3>
                    <hr />
                    <p>As a Front-end Developer, I specialize in crafting user interfaces using React. With a keen eye for detail, I bring designs to life, ensuring an intuitive and visually appealing interface. My proficiency lies in building responsive layouts and interactive elements, delivering a compelling user journey and enhancing overall usability.</p>
                </div>
                <div className="service">
                    <h3>UI/UX Designing</h3>
                    <hr />
                    <p>In the realm of UI/UX Designing, I merge creativity with functionality to create captivating user interfaces and delightful user experiences. Following a user-centered design approach, I use React for front-end development, ensuring seamless interactions and visually engaging designs that enhance user satisfaction.</p>
                </div>
                <div className="service">
                    <h3>Cloud & Infrastructure Engineering</h3>
                    <hr />
                    <p>With expertise in cloud and infrastructure engineering, I design and deploy scalable, secure, and efficient systems. My work involves leveraging cloud platforms like AWS, Azure, or GCP to build resilient architectures that support modern applications. I specialize in containerization with Docker and orchestration with Kubernetes, ensuring seamless deployment and management of applications across diverse environments.</p>
                </div>
                <div className="resume">
                    <button onClick={handleDownloadClick} className="download-button col-12">
                        Download Resume&nbsp;<i className="fa-regular fa-circle-down"></i>
                    </button>
                </div>
            </div>

            {/* Conditionally render the form overlay */}
            {isFormVisible && <FormOverlay onSubmit={handleFormSubmit} onClose={() => setIsFormVisible(false)} />}
        </div>
    );
}

export default Services;
