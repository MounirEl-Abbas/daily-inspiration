// import React from "react";
// import { useGlobalContext } from "../../context";

// const Cocktail = () => {
//   let uniqueKey1 = 1;
//   let uniqueKey2 = 999;

//   const {
//     cocktail: {
//       strDrinkThumb,
//       strDrink,
//       strCategory,
//       strInstructions,
//       strIngredient1,
//       strIngredient2,
//       strIngredient3,
//       strIngredient4,
//       strIngredient5,
//       strIngredient6,
//       strMeasure1,
//       strMeasure2,
//       strMeasure3,
//       strMeasure4,
//       strMeasure5,
//       strMeasure6,
//     },
//   } = useGlobalContext();

//   const ingredients = [];
//   const measurements = [];
//   if (strIngredient1) {
//     ingredients.push(strIngredient1);
//     measurements.push(strMeasure1);
//   }
//   if (strIngredient2) {
//     ingredients.push(strIngredient2);
//     measurements.push(strMeasure2);
//   }
//   if (strIngredient3) {
//     ingredients.push(strIngredient3);
//     measurements.push(strMeasure3);
//   }
//   if (strIngredient4) {
//     ingredients.push(strIngredient4);
//     measurements.push(strMeasure4);
//   }
//   if (strIngredient5) {
//     ingredients.push(strIngredient5);
//     measurements.push(strMeasure5);
//   }
//   if (strIngredient6) {
//     ingredients.push(strIngredient6);
//     measurements.push(strMeasure6);
//   }
//   return (
//     <div>
//       <img style={{ width: "200px" }} src={strDrinkThumb} alt={`${strDrink}`} />
//       <h4>{strDrink}</h4>
//       <h6>{strCategory}</h6>
//       <div>
//         <p>{strInstructions}</p>
//         <ul>
//           {ingredients.map((each) => {
//             uniqueKey1++;
//             return <li key={uniqueKey1}>{each}</li>;
//           })}
//         </ul>
//         <ul>
//           {measurements.map((each) => {
//             uniqueKey2--;
//             return <li key={uniqueKey2}>{each}</li>;
//           })}
//         </ul>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default Cocktail;
