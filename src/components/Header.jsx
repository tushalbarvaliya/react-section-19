import { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../store/CartContext'
const Header = () => {
  const {items}=useContext(CartContext)
  const totalNumberOfItem = items.reduce((total,item)=>{
    return total + item.quantity
  },0)
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="A resturent" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly={true}>cart ({totalNumberOfItem})</Button>
      </nav>
    </header>
  )
}

export default Header