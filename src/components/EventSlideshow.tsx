import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import './EventSlideshow.css'; // External CSS

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "Conference Meet on Education at RGUKT-Basar 2024",
      description: "Honourable TG Educational Commisioner Akunuri Murali Retired IAS, attended the conference meet on education at RGUKT-Basar, where he shared insights on educational reforms and innovations.",
      image: "../../assets/Meet2.jpeg",
      date: "Dec 2024"
    },
    {
      id: 2,
      title: "Letter Given to VC -RGUKT Basar",
      description: "We, the CRs, gave a letter to the Hon’ble VC to improve placements for CSE students.",
      image: "../../assets/VC_T&P.jpeg",
      date: "Nov 2024"
    },
    {
      id: 3,
      title: "CSE-C2 Class Trip to Nizamabad",
      description: "We,C2 students of RGUKTB went on a short trip to Nizamabad to enjoy and have fun with friends.",
      image: "../../assets/C2_trip1.JPG",
      date: "April 2024"
    },
    {
      id: 4,
      title: "Industry Visit to Cognizant",
      description: "The university arranged a visit to Cognizant to help students understand its work culture and receive training from industry experts.",
      image: "../../assets/Cognizant_Visit.jpg",
      date: "November 2024"
    },
     {
      id: 5,
      title: "Participation in Freshers’ Party",
      description: "Invited and participated in the Freshers’ Party organized by our department juniors, along with the HOD and faculty members.",
      image: "../../assets/Juniors_Freshers.jpeg",
      date: "Octomber 2024"
    },
    {
      id: 6,
      title: "Teachers’ Day Celebration",
      description: "Participated in the Teachers’ Day event at our university, organized by me and our department students, and felicitated the teachers for their efforts & Well being",
      image: "../../assets/Teachers day.jpeg",
      date: "September 2024"
    },
    {
      id: 7,
      title: "Farewell Party Celebration",
      description: "Enjoyed the farewell party organized by our juniors with great enthusiasm and memorable moments.",
      image: "../../assets/Farewell.jpg",
      date: "April 2025"
    },
    {
      id: 8,
      title: "Team Building Event- SIH",
      description: "Participated in the Smart India Hackathon (SIH) 2023, a nationwide initiative to provide students with a platform to solve real-world problems.",
      image: "../../assets/SIH.jpg",
      date: "November 2023"
    },
    {
      id: 9,
      title: "Volunteer Visit for Convocation",
      description: "Visited Hyderabad as a volunteer to participate in the seniors’ convocation held at Gachibowli.",
      image: "../../assets/Conference.jpg",
      date: "August 2023"
    },
    {
      id: 10,
      title: "Sevalal Jayanthi Celebrations -RGUKT Basar",
      description: "Participated in the Sevalal Jayanthi celebrations at our university, where we honored the legacy of Sevalal Maharaj and his contributions to society.",
      image: "../../assets/Seva.jpg",
      date: "Feb 2023"
    },
    {
      id: 11,
      title: "Member of Hope House",
      description: "As a member of Hope House, I actively participated in various social initiatives and Events to support underprivileged children.",
      image: "../../assets/Hope_House.JPG",
      date: "Jan 2024"
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2>Events & Achievements</h2>
          <div className="underline"></div>
        </div>

        <div className="slideshow-wrapper">
          <div className="slideshow">
            <img
              src={events[currentSlide].image}
              alt={events[currentSlide].title}
              className="slide-image"
            />
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="slide-date">
                <Calendar size={20} />
                <span>{events[currentSlide].date}</span>
              </div>
              <h3>{events[currentSlide].title}</h3>
              <p>{events[currentSlide].description}</p>
            </div>
          </div>

          <button className="nav-button left" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-button right" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className="dot-indicators">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSlideshow;
