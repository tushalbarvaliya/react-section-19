import logo from '../assets/logo.jpg'
import Button from '../UI/Button'
const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="A resturent" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly={true}>cart (0)</Button>
      </nav>
    </header>
  )
}

export default Header