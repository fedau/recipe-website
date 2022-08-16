import { Recipe } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { prisma } from "../server/db/client";

type RecipesProps = { recipes: Recipe[] };

// Fetch all recipes (in /pages/index.tsx)
export const getStaticProps = async () => {
  const recipes = await prisma.recipe.findMany();

  return {
    props: { recipes },
  };
};

const Home: NextPage<RecipesProps> = ({ recipes }) => {
  return (
    <>
      <Head>
        <title>lets create this fucking websites</title>
        <meta
          name="description"
          content="Created by Fedau and mentored by Ilger"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col min-h-screen p-2 content-start">
        <h1 className="text-3xl md:text-[3rem] leading-normal font-extrabold text-gray-900">
          <span className="text-green-700">
            Bungalow <div className="text-gray-900 ">Bears</div>
          </span>
        </h1>
        <p className="text-2xl text-center text-gray-700">
          Hiya here are all our recipes! enjoy cooking
        </p>
        <div className=" grid gap-3 pt-3 mt-3 text-center  md:grid-cols-3 lg:grid-cols-5 lg:w-2/3">
          {recipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <p className="font-bold text-green-600">{recipe?.title}</p>
              <p>{recipe?.description}</p>
              <p>{recipe?.ingredients}</p>
              <p>{recipe?.description}</p>
              <p>{recipe?.ingredients}</p>
            </div>
          ))}
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>

          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
          <p className="card">
            mor text as a test <br /> mora and more to say
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
