// "use client";
// import React from "react";

// export default function ExampleNavbarOne() {
//   return (
//     <div className="shadow-lg relative w-full bg-transparent">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//         <div className="inline-flex items-center space-x-2">
//           <span>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 50 56"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                 fill="black"
//               />
//             </svg>
//           </span>
//           <span className="font-bold">YouTube Dream Downloader</span>
//         </div>
//         <div className="hidden lg:block"></div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function ExampleNavbarOne() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 transition-all duration-500">
//         <div className="inline-flex items-center space-x-2 animate-pulse">
//           <span>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 50 56"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="animate-bounce"
//             >
//               <path
//                 d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                 fill="black"
//               />
//             </svg>
//           </span>
//           <span className="font-bold text-white">YouTube Dream Downloader</span>
//         </div>
        
//         <div className="hidden lg:flex space-x-6">
//           <Link href="/" className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110">Home</Link>
//           <Link href="/about" className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110">About</Link>
//           <Link href="/contact" className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110">Contact</Link>
          
//           {/* Dropdown for Privacy and Terms */}
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110 focus:outline-none"
//             >
//               Privacy
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100">
//                 <div className="py-1">
//                   <Link href="/privacy" className="block px-4 py-2 text-black hover:bg-yellow-100">Privacy Policy</Link>
//                   <Link href="/terms" className="block px-4 py-2 text-black hover:bg-yellow-100">Terms & Conditions</Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ExampleNavbarOne() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="inline-flex items-center space-x-2 animate-pulse">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="font-bold text-white">YouTube Dream Downloader</span>
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110">About</Link>
          <Link href="/contact" className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110">Contact</Link>
          
          {/* Dropdown for Privacy and Terms */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-yellow-200 transition-transform duration-300 transform hover:scale-110 focus:outline-none"
            >
              Privacy
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 opacity-100">
                <div className="py-1">
                  <Link href="/privacy" className="block px-4 py-2 text-black hover:bg-yellow-100">Privacy Policy</Link>
                  <Link href="/terms" className="block px-4 py-2 text-black hover:bg-yellow-100">Terms of Service</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}