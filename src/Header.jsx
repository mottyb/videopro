export default function Header() {
  return (
    <div className="header">
      <div className="left">
      <li><a href="#" title="Login">Login</a></li> 
      <li><a href="#" title="Logout">Logout</a></li> 
      <li><a href="#" title="my acount">My acount</a></li> 
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
