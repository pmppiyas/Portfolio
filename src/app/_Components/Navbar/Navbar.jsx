"use client";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const links = [
    { name: "Home", link: "/#home" },
    { name: "About", link: "/#about" },
    { name: "Service", link: "/#service" },
    {
      name: "Portfolio",
      link: "/#portfolio",
      // subMenu: [
      //   { name: "Web Development", link: "/portfolio/#web" },
      //   { name: "Mobile Apps", link: "/portfolio/#mobile" },
      //   { name: "UI/UX Design", link: "/portfolio/#design" },
      // ],
    },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all max-w-6xl duration-300  ${
        scrolled ? "bg-bg-custom shadow-lg py-4" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4  lg:px-6">
          {/* Logo */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <Link href="/" className="flex items-center">
              <span className="text-primary/90">P</span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                rince
              </span>
            </Link>
          </h2>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-1">
              {links.map((link, idx) => (
                <div key={idx} className="relative group">
                  <Link
                    href={link.subMenu ? "#" : link.link}
                    className={`text-base font-medium px-4 py-2 rounded-md flex items-center gap-1 transition-all
                      ${
                        pathname === link.link
                          ? "text-primary"
                          : "text-white hover:text-primary/80"
                      }`}
                    onClick={(e) => link.subMenu && e.preventDefault()}
                  >
                    {link.name}
                    {link.subMenu && (
                      <ChevronDown
                        size={16}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    )}
                  </Link>

                  {/* Dropdown for submenu */}
                  {link.subMenu && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg- rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-1">
                        {link.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Phone contact - desktop */}
            <div className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-yellow-300/20">
              <Phone size={18} className="animate-pulse" />
              <p>+880177233703</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Small phone icon for mobile */}
            <a
              href="tel:+880177233703"
              className="text-primary p-2 rounded-full hover:bg-primary/50 transition-colors"
            >
              <Phone size={20} />
            </a>

            <button
              className="text-primary p-2 rounded-full hover:bg-primary/50 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - slide in from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-[750px] w-[280px] bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out transform overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-yellow-50 hover:bg-yellow-100 text-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Close menu"
          >
            <X
              size={24}
              strokeWidth={2.5}
              className="transition-transform hover:rotate-90 duration-300"
            />
          </button>
        </div>

        {/* Logo in mobile menu */}
        <div className="pt-12 px-4 pb-4 border-b border-gray-100">
          <h2 className="text-2xl font-bold">
            <span className="text-yellow-500">P</span>rince
          </h2>
        </div>

        <div className="px-4 pb-6">
          <nav className="flex flex-col">
            {links.map((link, idx) => (
              <div key={idx} className="border-b border-gray-100">
                {!link.subMenu ? (
                  <Link
                    href={link.link}
                    className={`flex items-center py-4 px-3 text-lg
                ${
                  pathname === link.link
                    ? "text-yellow-500 font-medium"
                    : "text-gray-800"
                }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <MobileSubmenu link={link} />
                )}
              </div>
            ))}
          </nav>

          {/* Phone contact - mobile */}
          <div className="mt-6 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg transition-all text-center justify-center shadow-lg">
            <Phone size={20} />
            <a href="tel:+880177233703" className="text-lg font-medium">
              +880177233703
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

// Mobile submenu component with toggle functionality
function MobileSubmenu({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-4 px-3 text-lg text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {link.name}
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-md ${
          isOpen ? "max-h-64 py-2 mb-2" : "max-h-0"
        }`}
      >
        {link.subMenu?.map((subItem, subIdx) => (
          <Link
            key={subIdx}
            href={subItem.link}
            className="block pl-6 pr-3 py-3 text-gray-700 hover:text-yellow-500 border-l-2 border-transparent hover:border-yellow-500 ml-3 transition-all"
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
