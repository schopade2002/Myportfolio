import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(false);

    const links = document.querySelectorAll(".header ul a");

    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const el = e.currentTarget as HTMLAnchorElement;
        const section = el.getAttribute("data-href");

        if (section) {
          smoother.scrollTo(section, true, "top top");
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", handleResize);

    // ✅ CLEANUP FUNCTION
    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
      window.removeEventListener("resize", handleResize);
      smoother.kill();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Sneha
        </a>

        <a
          href="mailto:schopade0825@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          schopade0825@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;