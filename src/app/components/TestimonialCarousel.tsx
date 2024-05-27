"use client"
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function TestimonialCarousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2200);

        return () => clearInterval(intervalId);
    }, [items.length]);

    return (
        <div className="simple-carousel">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={index === currentIndex ? 'carousel-item active' : 'carousel-item'}
                >
                <div className='card_container'>

                    <div className='card'>
                        <div className="user">
                            <img className='icon' src={item.image} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                        <div className="feedback_text">
                                <p className='review_text'>{item.review}</p>
                                {/* <div className='star'>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <FaStar  key={i} style={{ color: 'yellow'}}  />
                                    ))}

                                </div> */}
                        </div> 
                    </div>
                </div>

                </div>
            ))}
        </div>
    );
}

export default TestimonialCarousel;
