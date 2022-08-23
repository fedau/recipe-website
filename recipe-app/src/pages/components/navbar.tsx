import Link from "next/link";

function Nav() {
  return (
    <div className="flex gap-15 after:pt-3 mt-8  container mx-auto  ">
      <h1 className="text-3xl md:text-[3rem] p-2 font-extrabold text-gray-900">
        <span className="text-egg">Bungalow Bears</span>
      </h1>
      <div className="grid  md:grid-cols-3 lg:grid-cols-3 gap-4">
        <p className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
        <p className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </p>
        <p className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link href="/recipe/add">
            <a>Recipe</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Nav;
