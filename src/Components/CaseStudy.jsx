// import React from "react";
// import { Link } from "react-router-dom";

// export default function CaseStudy(props) {
//   const { showTitle, title, caseStudyCover, overview, tag } = props;

//   return (
//     <>
//       <section className="case-study">
//         {showTitle && <h2 className="h2">Case Study</h2>}
//         <article>
//           <ul>
//             <li>
//               <div className="top-bar">
//                 <div className="left-buttons">
//                   <div className="red"></div>
//                   <div className="yellow"></div>
//                   <div className="green"></div>
//                 </div>
//               </div>
//               <div className="project">
//                 <div className="content">
//                   <h3 className="h3">{title}</h3>
//                   <ul className="tags">
//                     <li className="tag">
//                       <span className="font">{tag}</span>
//                     </li>
//                   </ul>
//                   <div className="description">
//                     <p>{overview}</p>
//                   </div>
//                   {/* Substitua o botão por um componente Link */}
//                   <Link to={`/project/${props.id}`}>
//                     <button>Read Case Study</button>
//                   </Link>
//                 </div>
//                 <div className="img-content">
//                   <img src={caseStudyCover} alt={title} />
//                 </div>
//               </div>
//             </li>
//           </ul>
//           {showTitle && <button>See all projects</button>}
//         </article>
//       </section>
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function CaseStudy(props) {
  const { showTitle, title, caseStudyCover, overview, tag, linkTo } = props;

  return (
    <>
      <section className="case-study">
        {showTitle && <h2 className="h2">Case Study</h2>}
        <article>
          <ul>
            <li>
              <div className="top-bar">
                <div className="left-buttons">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3 className="h3">{title}</h3>
                  <ul className="tags">
                    <li className="tag">
                      <span className="font">{tag}</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>{overview}</p>
                  </div>
                  {/* Use o Link diretamente dentro do componente CaseStudy */}
                  {/* <Link to={linkTo}>
                    <button>Read Case Study</button>
                  </Link> */}
                  <Link className="btn-case-study-single" to="/projects/eir">
                    Read Case Study
                  </Link>
                </div>
                <div className="img-content">
                  <img src={caseStudyCover} alt={title} />
                </div>
              </div>
            </li>
          </ul>
          {/* {showTitle && <button>See all projects</button>}  */}
          {showTitle && (
            <Link className="btn-case-study" to="/projects">
              See all projects
            </Link>
          )}
        </article>
      </section>
    </>
  );
}
