import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav d-flex justify-content-begin a">
      <Link className="nav-link logo text-light" href="/">
        MernCamp
      </Link>

      <Link className="nav-link text-light" href="/login">
        Login
      </Link>

      <Link className="nav-link text-light" href="/register">
        Register
      </Link>
    </nav>
  );
};

export default Nav;
