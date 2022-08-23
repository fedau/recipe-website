import { Recipe } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { prisma } from "../server/db/client";
import Image from "next/image";
import banner from "../public/main.jpeg";
import Nav from "./components/navbar";

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
        <title>recipe</title>
        <meta
          name="description"
          content="Created by Fedau and mentored by Ilger"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="container mx-auto w-11/12 flex flex-col min-h-screen p-4">
        <p className="text-2xl text-center text-gray-700">
          Hiya here are all our recipes! enjoy cooking
        </p>
        {/* <span className="justify-center bg-contain"> */}
        <Image
          src={banner}
          alt="test image"
          height="300"
          width="250"
          className="bg-gradient-to-bl"
        />
        {/* </span> */}

        <div className="grid gap-3 pt-3 mt-3  md:grid-cols-3 lg:grid-cols-5 ">
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
            <Image src={banner} />
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
      <footer className="p-5">
        This website is made by two experienced developers
      </footer>
    </>
  );
};

export default Home;
