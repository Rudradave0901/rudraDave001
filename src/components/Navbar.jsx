// Node Modules
import { useRef, useEffect, useState }
from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const [currentSection, setCurrentSection] = useState("home"); // State to keep track of the active section

  const initActiveBox = () => {
    // Find the currently active link based on currentSection state
    const activeLinkElement = document.querySelector(`.nav-link[data-section="${currentSection}"]`);

    if (activeLinkElement && activeBox.current) {
      // If a matching link is found, position the activeBox normally
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = activeLinkElement;
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
      activeBox.current.style.height = `${offsetHeight}px`;
      activeBox.current.style.opacity = "1"; // Make sure it's visible
    } else if (activeBox.current) {
      // If no matching link is found for the current section (e.g., Contact on small screens),
      // hide the active box.
      activeBox.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, [currentSection]); // Re-run initActiveBox when currentSection changes

  const activeCurrentLink = (event) => {
    // Prevent default anchor link behavior
    event.preventDefault();

    // Update the currentSection state
    const sectionId = event.target.dataset.section;
    setCurrentSection(sectionId);

    // Manually scroll to the section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // New useEffect for scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with an ID (assuming these are your scrollable content areas)
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const offset = 150; // A common practice is to trigger the active state when the top of the section

        if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + sectionHeight - offset) {
          currentActive = section.id;
        }
      });

      // Update the currentSection state only if it has changed
      if (currentActive && currentActive !== currentSection) {
        setCurrentSection(currentActive);
      }
      // Special case: if at the very top and no section is active, default to 'home'
      if (window.scrollY === 0 && currentSection !== "home") {
          setCurrentSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]); // Depend on currentSection to re-evaluate scroll position on link click

  const navItems = [
    { label: "Home", link: "#home", sectionId: "home" },
    { label: "About", link: "#about", sectionId: "about" },
    { label: "Skills", link: "#skills", sectionId: "skills" },
    { label: "Work", link: "#work", sectionId: "work" },
    { label: "Resume", link: "#resume", sectionId: "resume" },
    // { label: "Reviews", link: "#reviews", sectionId: "reviews" },
    // This is where you apply the responsive class
    { label: "Contact", link: "#contact", sectionId: "contact", className: "md:!hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, sectionId, className }, key) => (
        <a
          href={link}
          key={key}
          // Assign ref to the initially active "Home" link
          ref={sectionId === "home" ? lastActiveLink : null}
          // Apply responsive class here
          className={`${className || ""} nav-link font-s-14 ${currentSection === sectionId ? "active" : ""}`}
          onClick={activeCurrentLink}
          data-section={sectionId} // Add a data-section attribute
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;