import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="A resturent" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>cart (0)</button>
      </nav>
    </header>
  )
}

export default Header