import { Link } from "@tanstack/react-router";
import Cart from "../Cart";

export default function Header() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex mx-auto px-4 py-6 w-[90%]">
          <Link
            to="/"
            className="py-4 pr-6 text-xl text-black transition-all ease-in-out hover:translate-y-2"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="py-4 pr-6 text-xl text-black transition-all ease-in-out hover:translate-y-2"
          >
            Contact
          </Link>

          <div className="flex justify-end w-full">
            <Cart />
          </div>
        </ul>
      </nav>
    </>
  );
}
