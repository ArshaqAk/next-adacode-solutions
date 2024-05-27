import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

function Testimonials() {
    const data = [
        {
            image: 'https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png',
            rating: 5,
            name: 'SHAMEEL NV',
            review: 'I can confidently say it has been an enriching experience. The faculty members are highly knowledgeable and supportive, always willing to go the extra mile to ensure students grasp complex concepts. '
        },
        {
            image: 'https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png',
            rating: 4,
            name: 'FAYAZ',
            review: 'The faculty members are not only experts in their fields but also passionate educators who genuinely care about their students success. The wide range of courses offered caters to diverse interests and career aspirations'
        },
        {
            image: 'https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png',
            rating: 5,
            name: 'AJIN',
            review: 'The infrastructure at Adacode Institute is truly impressive and contributes significantly to the overall learning experience.The campus is meticulously designed with modern facilities '
        },

        
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>Testimonials</h1>
            </div>
            <div className="carousel">
            <TestimonialCarousel items={data} />
            </div>
        </div>
    );
}

export default Testimonials;
