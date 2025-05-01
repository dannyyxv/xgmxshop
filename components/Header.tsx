import Link from "next/link";
import { FC } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header: FC = () => {
  return (
    <header className="py-4 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-silver via-blue-500 to-red-500"></div>

      <div className="relative w-full flex items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Brand Logo"
              className="h-40 w-40 object-cover"
            />
          </Link>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-red-500 font-orbitron">
            XGMX
          </h1>

          <nav className="flex gap-6 ml-10">
            <Link
              href="/"
              className="text-2xl font-press-start text-white hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-2xl font-press-start text-white hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              Shop
            </Link>
            <Link
              href="/sponsors"
              className="text-2xl font-press-start text-white hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              Sponsors
            </Link>
            <Link
              href="/contact"
              className="text-2xl font-press-start text-white hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-black text-white hover:bg-gray-800 text-lg font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
