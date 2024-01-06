import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <nav>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
>
  Home
</NavLink>
<NavLink
        to="/about"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
>
About
</NavLink>

<NavLink
        to="/myacount"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
>
My acount
</NavLink>
<NavLink
        to="/todo"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
>
Todo Project
</NavLink>


      </nav>
      </div>
      <div className="center">
<input type="seach"  placeholder="explore your song"  />
      </div>
      <div className="logo">
      <a href="#" title="Mymusic"><img src="./src/assets/music_7728080.svg" alt="Mymusic" /></a>
      </div>
    </div>
  )
}
