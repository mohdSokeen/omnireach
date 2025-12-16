import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
    {
        text: "I had been sending out applications for months with no response. Within a week of connecting with OmniReach Technology, I had three interviews lined up. They didn’t just find me a job — they found me the right fit.",
        author: "Business Analyst",
        location: "Virginia",
    },
    {
        text: "What I appreciated most was how OmniReach Technology treated me like a person, not a resume. My recruiter checked in before and after every interview, made sure I was prepared, and celebrated with me when I got the offer.",
        author: "Scrum Master",
        location: "Texas",
    },
    {
        text: "I wasn’t sure if my skills were relevant after being out of work for a while. OmniReach Technology helped me reframe my resume and got me into a contract role that gave me the confidence to keep growing.",
        author: "QA Tester",
        location: "Remote",
    },
    {
        text: "Most recruiters ghost you. OmniReach Technology didn’t. Even when the first client passed, they kept me updated and quickly found me another opportunity. That honesty meant a lot.",
        author: "Java Developer",
        location: "Chicago",
    },
    {
        text: "I was nervous about switching from a government project to the private sector. My recruiter at OmniReach Technology explained everything clearly, helped with the transition, and I landed a role with better pay and flexibility.",
        author: "Project Manager",
        location: "Washington DC",
    },
    {
        text: "OmniReach Technology wasn’t pushy. They actually asked me what I wanted in my next role — location, salary, flexibility — and matched me to something that checked all the boxes.",
        author: "Cybersecurity Engineer",
        location: "Houston",
    },
];

export default function Testimonial() {
    return (
        <section id="testimonial" className="py-6">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">What Our Candidates Say</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white h-full flex flex-col p-6" >
                            <FontAwesomeIcon icon={faQuoteLeft} className="w-6 h-6 mb-4" style={{ color: '#F7931E' }}/>
                            <p className="text-m mb-5 italic" style={{ color: "#1D2452" }}>“{t.text}”</p>
                            <div className="text-left mt-auto">
                                <p className="font-semibold text-gray-900" style={{ color: '#F7931E' }}>{t.author}</p>
                                <p className="text-sm" style={{ color: "#1D2452" }}>{t.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
