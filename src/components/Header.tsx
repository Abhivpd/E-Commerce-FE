import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "ergregre", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="header">
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button className="user" onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>

          <dialog open={isOpen} className="user-dialog">
            <div className="navList">
              {user.role === "admin" && (
                <Link className="nav-items" to={"/admin/dashboard"} onClick={() => setIsOpen(false)}>Admin</Link>
              )}
              <Link className="nav-items" to={"/orders"} onClick={() => setIsOpen(false)}>Orders</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
