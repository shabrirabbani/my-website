'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, { threshold: 0.5 });

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    // Fungsi untuk menangani scroll smooth
    const handleClick = (event, id) => {
      event.preventDefault();

      const section = document.getElementById(id);
      const container = document.getElementById("scroll-container"); // Sesuaikan ID dengan container

      if (section && container) {
        container.scrollTo({
          top: section.offsetTop - container.offsetTop,
          behavior: "smooth",
        });
      }
    };


    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest w-fit'>
            <NavItem active={activeSection === 'about'} onClick={(e) => handleClick(e, 'about')} num='01' name="ABOUT" />
            <NavItem active={activeSection === 'experiences'} onClick={(e) => handleClick(e, 'experiences')} num='02' name="EXPERIENCES" />
            <NavItem active={activeSection === 'education'} onClick={(e) => handleClick(e, 'education')} num='03' name="EDUCATION" />
            <NavItem active={activeSection === 'projects'} onClick={(e) => handleClick(e, 'projects')} num='04' name="PROJECTS" />
        </div>
    );
};

export default Navigation;
