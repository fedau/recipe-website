import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// export default function Form() {
//   const { register, handleSubmit } = useForm();

//   const onSubmit: SubmitHandler = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//     >
//       <input type="text" placeholder="Recipe Title" name="title" />

//       <input type="text" placeholder="Recipe Description" name="description" />
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         Ingredients
//       </label>
//       <input type="text" placeholder="Recipe Ingredients" name="ingredients" />
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         Instructions
//       </label>
//       <input
//         type="text"
//         placeholder="Recipe Instructions"
//         name="instructions"
//       />
//       <input type="submit" />
//     </form>
//   );
// }

enum FoodTagEnum {
  Breakfast = "breakfast",
  Dinner = "dinner",
  Dessert = "dessert",
}

interface IFormInput {
  recipeTitle: String;
  recipeDescription: String;
  recipeIngredients: String;
  recipeInstructions: String;
  tag: FoodTagEnum;
}

export default function Form() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <label>Recipe Name</label>
      <input {...register("recipeTitle")} />
      <label>Recipe Description</label>
      <input {...register("recipeDescription")} />
      <label>Recipe Ingredients</label>
      <input {...register("recipeIngredients")} />
      <label>Recipe Instructions</label>
      <input {...register("recipeInstructions")} />
      <label>Tag</label>
      <select {...register("tag")}>
        <option value="breakfast">breakfast</option>
        <option value="dinner">dinner</option>
        <option value="dessert">dessert</option>
      </select>
      <input type="submit" className="button" />
    </form>
  );
}
