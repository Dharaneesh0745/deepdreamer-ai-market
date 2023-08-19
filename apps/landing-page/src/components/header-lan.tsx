// import Link from "next/link";
// import React, { useState } from "react";

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     document.querySelector(sectionId).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//     // Close the navigation menu (if open) after clicking a link
//     if (isNavOpen) {
//       toggleNav();
//     }
//   };

//   return (
//     <header
//       className={`top-0 left-0 right-0 ${
//         isNavOpen ? "bg-gray-900" : "bg-transparent"
//       } text-white dark:text-white transition-all duration-300 ease-in-out`}
//     >
//       <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
//         <div className="ml-5 flex title-font font-medium items-center text-gray-900 md:mb-0">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl text-orange-500">Deep Dreamer</span>
//           <button
//             className="md:hidden text-white hover:text-neon-blue ml-32 transition-all duration-300 ease-in-out"
//             onClick={toggleNav}
//           >
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-6 h-6"
//               viewBox="0 0 24 24"
//             >
//               {isNavOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12"></path>
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16"></path>
//               )}
//             </svg>
//           </button>
//         </div>

//         <nav
//           className={`${
//             isNavOpen ? "block" : "hidden"
//           } md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center mt-4 md:mt-0`}
//         >
//           <a
//             onClick={() => scrollToSection("#developer")}
//             className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
//           >
//             Developer
//           </a>
//           <a
//             onClick={() => scrollToSection("#products")}
//             className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
//           >
//             Products
//           </a>
//           <a
//             onClick={() => scrollToSection("#pricing")}
//             className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
//           >
//             Pricing
//           </a>
//           <a
//             onClick={() => scrollToSection("#testimonials")}
//             className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
//           >
//             Testimonials
//           </a>
//           <a
//             onClick={() => scrollToSection("#faqs")}
//             className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
//           >
//             FAQ`s
//           </a>
//           <a
//             onClick={() => scrollToSection("#contact")}
//             className="block mt-4 md:inline-block md:mt-0 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
//           >
//             Contact
//           </a>
//         </nav>
//         <button className="mr-3 hidden md:inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-neon-blue hover:text-black rounded text-base mt-4 md:mt-0">
//           Button
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-4 h-4 ml-1 -mt-1"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.querySelector(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close the navigation menu (if open) after clicking a link
    if (isNavOpen) {
      toggleNav();
    }
  };

  return (
    <header
      className={`top-0 left-0 right-0 ${
        isNavOpen ? "bg-gray-900" : "bg-transparent"
      } text-white dark:text-white transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="ml-5 flex title-font font-medium items-center text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-orange-500">Deep Dreamer</span>
          <button
            className="md:hidden text-white hover:text-neon-blue ml-32 transition-all duration-300 ease-in-out"
            onClick={toggleNav}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              {isNavOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center mt-4 md:mt-0`}
        >
          <a
            onClick={() => scrollToSection("#developer")}
            className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Developer
          </a>
          <a
            onClick={() => scrollToSection("#products")}
            className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Products
          </a>
          <a
            onClick={() => scrollToSection("#pricing")}
            className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Pricing
          </a>
          <a
            onClick={() => scrollToSection("#testimonials")}
            className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Testimonials
          </a>
          <a
            onClick={() => scrollToSection("#faqs")}
            className="block mt-4 md:inline-block md:mt-0 md:mr-4 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            FAQ`s
          </a>
          <a
            onClick={() => scrollToSection("#contact")}
            className="block mt-4 md:inline-block md:mt-0 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Contact
          </a>
        </nav>
        <button className="mr-3 hidden md:inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-neon-blue hover:text-black rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1 -mt-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
