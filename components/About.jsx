// components/AboutMe.jsx
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import profileimg from '../app/assets/media/profileimg.png'; // your uploaded image

export default function AboutMe() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    // Counter animation for years
    let yearCount = 0;
    const yearInterval = setInterval(() => {
      if (yearCount < 2) {
        yearCount += 1;
        setYears(yearCount);
      } else {
        clearInterval(yearInterval);
      }
    }, 500); // speed in ms

    // Counter animation for projects
    let projectCount = 0;
    const projectInterval = setInterval(() => {
      if (projectCount < 15) {
        projectCount += 1;
        setProjects(projectCount);
      } else {
        clearInterval(projectInterval);
      }
    }, 100); // speed in ms

    return () => {
      clearInterval(yearInterval);
      clearInterval(projectInterval);
    };
  }, []);

  return (
    <section className="py-5 about-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold me-title">Get to know the person behind the code</h2>
          <hr className="mx-auto my-3 borderTitle" />
          {/* <p>Get to know the person behind the code</p> */}
        </div>

        <div className="row gx-0">
          {/* Text content */}
          <div className="col-lg-7">
            <div className="about-desc">
              <p>
                Creating dynamic news and content platforms using React.js and Next.js is my specialty. I focus on building API-driven applications with category-based routing, lazy loading, and interactive UI components. My projects often include scroll-based metadata updates, skeleton loaders, and real-time social share features to enhance user engagement on high-traffic websites.
              </p>
              <p>
                Responsive layouts are crafted using multiple tools, ensuring smooth experiences across desktop and mobile devices. Clean, maintainable code and performance optimization are always a priority.
              </p>
              <p>
                To expand my capabilities, I am also developing backend skills in Laravel, aiming to deliver complete full-stack web solutions. My goal is to create scalable, reliable, and user-friendly applications that solve real-world problems.
              </p>
            </div>
            <div className="row gx-4 mt-4">
              <div className="col-lg-6 text-start">
                <div className="counter-area">
                  <h4 className="text-white">{years}+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="counter-area">
                  <h4>{projects}+</h4>
                  <p>Projects Completed</p>
                </div>

              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-5 text-center">
            <div className="profile-border" >
              <Image
                src={profileimg}
                alt="Profile"
                title='Humaira Hossain'
                width={350}
                height={100}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}