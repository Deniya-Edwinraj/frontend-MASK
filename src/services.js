import React, { useState } from 'react';
import './services.css';
import { Link } from 'react-router-dom';


function Services() {
    return (
        <div className="service">
        <div className="services">
            {/* <!-- 1 --> */}
            <div className="box">
                <div className="service-content">
                    <div className="service-icon"><i className="bi bi-balloon-heart"></i></div>
                    <div className="service-text">
                        <h4>Function Decoration</h4>
                        <p>Welcome to MASK, where we turn your special moments into unforgettable experiences with our exquisite custom-made paper decorations! Our skilled artisans specialize in crafting unique and personalized ornaments, adding elegance to weddings, birthdays, reunions, and festivals. Let us bring your vision to life with our dedication and expertise.  </p><br/>
                        <Link to='/product'>
                        <a href="1">View More</a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- 2 --> */}
            <div className="box">
                <div className="service-content">
                    <div className="service-icon"><i className="bi bi-balloon-heart"></i></div>
                    <div className="service-text">
                        <h4>Decorative Ornaments</h4>
                        <p>Welcome to MASK, where creativity and craftsmanship unite to offer a dazzling range of custom-made paper ornaments. Elevate your spaces with our exquisite handcrafted flower vases, wall hangers, bouquets, gift items, and lanterns. Each piece is a testament to precision and creativity, transforming ordinary paper into extraordinary art.</p><br/>
                        <Link to='/product'>
                        <a href="1">View More</a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- 3 --> */}
            <div className="box">
                <div className="service-content">
                    <div className="service-icon"><i className="bi bi-balloon-heart"></i></div>
                    <div className="service-text">
                        <h4>Why you have to choose us</h4>
                        <p>Unique Craftsmanship: Unmatched creativity for memorable, distinctive decorations.<br/>
Personalized Touch: Tailored designs reflecting preferences and event themes.<br/>
High-Quality Elegance: Handcrafted ornaments ensuring sophistication.<br/>
Versatile Celebrations: Custom-made paper decorations for any occasion.</p><br/>
                        <Link to='/product'>
                        <a href="1">View More</a>
                        </Link>
                    </div>
                </div>
            </div>
    
        </div>
        </div>
    );
}
export default Services;