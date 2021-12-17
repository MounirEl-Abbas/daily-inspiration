// import React from "react";
// import { useGlobalContext } from "../context";

// const ContentSectionTwo = () => {
//   const {
//     imageTwo,
//     advice: {
//       slip: { advice },
//     },
//     activity: { activity, type },
//     word: { word, definition },
//   } = useGlobalContext();
//   return (
//     <section className="sectionTwo">
//       <img src={imageTwo} />

//       {/* Word Of the Day */}
//       <div className="sectionTwo-cards">
//         <article className="card-one">
//           <h3>Word of the Day</h3>
//           <h4>{word}</h4>
//           <p>
//             <span>Definition: </span>
//             {definition}
//           </p>
//         </article>
//         <article className="card-two">
//           <h3>Daily Advice</h3>
//           <p>{advice}</p>
//         </article>
//         {/* Activity */}
//         <article className="card-three">
//           <h3>Bored?</h3>
//           <div>
//             <p>{activity}</p>
//             <p>
//               <span>Activity Purpose: </span>
//               {type}
//             </p>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default ContentSectionTwo;
