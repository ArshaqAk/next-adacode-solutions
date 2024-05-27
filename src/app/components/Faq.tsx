"use client"
import React, { useState } from 'react';

const Dropdown: React.FC = () => {
    const faqData=[
        {
            question:'What is Adacode Solutions ?',
            answer:'Adacode  is an organization dedicated to the development, research, and dissemination of software-related knowledge, tools, and technologies. It can be an academic institution, a research center, or a commercial entity focused on software development and innovation.'
        },
        {
            question:'What services does Adacode Solutionss provide?',
            answer:'Adacode providing a range of services including software development, consulting, training, research and development, and sometimes product distribution. They may also offer specialized services such as software testing, cybersecurity assessments, and software architecture design.'
        },
        {
            question:'Is it expensive to engage with Adacode Solutions?',
            answer:'Engaging with Adacode Solutions for software training courses is notably cost-effective compared to other software institutions. They prioritize delivering high-quality education by quality tutors.'
        }
    ];

    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

    const toggleDropdown = (question: string) => {
        setSelectedQuestion(selectedQuestion === question ? null : question);
    };

    return (
        <div className="faq_container">
            <div className="faq_box">
                <h1 className='faq_header'>FAQ</h1>
                {faqData.map((item, index) => (
                    <div className="dropdown" key={index}>
                        <button className="dropdown-btn" onClick={() => toggleDropdown(item.question)}>
                            <span>{item.question}</span>
                            <span className={`arrow ${selectedQuestion === item.question ? 'open' : ''}`}></span>
                        </button>
                        {selectedQuestion === item.question && (
                            <div className='dropdown_container'>
                                <div className={`freediv ${selectedQuestion === item.question ? 'open' : ''}`}>

                                </div>
                            <ul className={`dropdown-content ${selectedQuestion === item.question ? 'open' : ''}`}>
                                <li><a href="">{item.answer}</a></li>
                            </ul>

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
