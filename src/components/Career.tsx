// import "./styles/Career.css";

// const Career = () => {
//   return (
//     <div className="career-section section-container">
//       <div className="career-container">
//         <h2>
//           My career <span>&</span>
//           <br /> experience
//         </h2>
//         <div className="career-info">
//           <div className="career-timeline">
//             <div className="career-dot"></div>
//           </div>

//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Full Stack Developer</h4>
//                 <h5>LNE Pvt. Ltd., Pune</h5>
//               </div>
//               <h3>Nov 2025 - Present</h3>
//             </div>
//             <p>
//               Developed a role-based ERP frontend, streamlining procurement,
//               HR, and production workflows. Built scalable modules with search,
//               filters, and pagination. Integrated APIs using TanStack Query and
//               managed global state with Zustand. Focused on reusable UI
//               components and performance optimizations for large datasets.
//             </p>
//           </div>

//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Full Stack Developer Intern</h4>
//                 <h5>Edsom Fintech, Pune</h5>
//               </div>
//               <h3>Mar 2025 - Sep 2025</h3>
//             </div>
//             <p>
//               Worked on UI features for an e-commerce platform (VastraLok). Built
//               reusable React components, integrated REST APIs using Axios, and
//               improved rendering and state handling to reduce unnecessary
//               re-renders and improve user experience. Applied lazy loading to
//               reduce initial load time.
//             </p>
//           </div>

//           {/* <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Selected Projects</h4>
//                 <h5>React / TypeScript / TanStack Query / Zustand</h5>
//               </div>
//               <h3>Projects</h3>
//             </div>
//             <p>
//               <strong>Car Dealership Management System</strong> — Responsive app
//               for vehicle inventory, sales, and customer data. Built reusable
//               components and optimized database queries for large datasets.
//               <br />
//               <strong>Sugar Industry ERP</strong> — Role-based ERP frontend for
//               sugar manufacturing. Implemented data fetching, caching, and
//               global state management; added search, filters, pagination and
//               export features.
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Latest Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Frontend Developer</h4>
                <h5>Digikore Studios Pvt. Ltd., Pune</h5>
              </div>
              <h3>Apr 2026 - Jun 2026</h3>
            </div>

            <p>
              Developed DigiCard, a corporate expense and payment platform using
              React.js, Redux Toolkit,Figma, Axios, and Tailwind CSS.
              Implemented secure authentication using custom Axios interceptors,
              token management, and protected routes. Collaborated with backend
              developers to integrate REST APIs and deliver responsive,
              high-performance financial workflows.
            </p>
          </div>

          {/* Previous Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Frontend Developer</h4>
                <h5>Fuel Advertising & Events Pvt. Ltd., Pune</h5>
              </div>
              <h3>Jun 2025 - Mar 2026</h3>
            </div>

            <p>
              Developed responsive web applications using React.js, Material UI,
              Tailwind CSS, TanStack Query,Figma and Zustand. Built 25+ reusable
              React components following atomic design principles, accelerating
              feature development by approximately 20%. Optimized API caching
              and state management, and improved performance through code
              splitting, lazy loading, and React.memo. Collaborated with
              cross-functional teams during Agile sprints, code reviews, API
              integrations, and QA cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
