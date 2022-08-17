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

      <main className="container mx-auto flex flex-col min-h-screen p-2">
        <h1 className="text-3xl md:text-[3rem] leading-normal font-extrabold text-gray-900">
          <span className="text-phatalo">
            Bungalow <div className="text-terra ">Bears</div>
          </span>
        </h1>
        <p className="text-2xl text-center text-gray-700">
          Hiya here are all our recipes! enjoy cooking
        </p>
        <img src="(../assets/main.jpeg)" alt="test image" />
        <div className="grid gap-3 pt-3 mt-3 content-end  md:grid-cols-3 lg:grid-cols-5 ">
          {recipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <p className="font-bold text-#123524">{recipe?.title}</p>
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
