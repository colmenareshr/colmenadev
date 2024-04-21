"use client";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="my-3 px-6 py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link href={"/"}>
            <span className="rounded-md border px-2 py-1 text-2xl font-extrabold text-yellow-400 shadow md:text-4xl">
              ColmenaDev
            </span>
          </Link>
        </div>
        <div>
          <CiMenuFries size={40} color="#FFD163" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
