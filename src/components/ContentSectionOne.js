// import React from "react";

// import { useGlobalContext } from "../context";

// const ContentSectionOne = () => {
//   const {
//     quoteInfo: { quoteText, quoteAuthor },
//     stoicQuote: { body, author },
//     affirmation,
//     image,
//   } = useGlobalContext();
//   return (
//     <section className="sectionOne">
//       <img src={image} alt="Random Daily Image" />

//       {/* Affirmation */}
//       <article className="sectionOne-affirmation">
//         <fieldset>
//           <legend>Affirmation</legend>
//           {affirmation}
//         </fieldset>
//       </article>
//       {/* Quote */}
//       <article className="sectionOne-quotes">
//         <aside className="quote">
//           <p>{quoteText}</p>
//           <h6>{quoteAuthor}</h6>
//         </aside>
//         {/* Stoic Quote */}
//         <aside className="stoic-quote">
//           <p>{body}</p>
//           <h6>{author}</h6>
//         </aside>
//       </article>
//     </section>
//   );
// };

// export default ContentSectionOne;
