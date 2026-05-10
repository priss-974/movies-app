import { Link } from "react-router-dom";

import type {
  Dispatch,
  SetStateAction,
} from "react";

interface NavbarProps {
  search: string;

  setSearch:
  Dispatch<SetStateAction<string>>;
}

function Navbar({
  search,
  setSearch,
}: NavbarProps) {

  return (

    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: "#111",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 999,
        flexWrap: "wrap",
        gap: "20px",
      }}
    >

      {/* LEFT */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >

        {/* LOGO */}

        <Link to="/">

          <img
            src="https://brandemia.org/sites/default/files/sites/default/files/icono_netflix_nuevo.jpg"
            alt="Netflix"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />

        </Link>

        {/* LINKS */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >

          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Inicio
          </Link>

          <Link
            to="/favorites"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Favoritos
          </Link>

        </div>

      </div>

      {/* SEARCH */}

      <div
        style={{
          position: "relative",
        }}
      >

        <input
          type="text"
          placeholder="Buscar películas..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "260px",
            padding: "12px 40px 12px 15px",
            borderRadius: "30px",
            border: "none",
            outline: "none",
            background: "#1d1d1d",
            color: "white",
          }}
        />

        <span
          style={{
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          🔍
        </span>

      </div>

    </nav>
  );
}

export default Navbar;