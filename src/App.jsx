import React, {useState} from 'react'
import CartCard from './components/CartCard'
import UserContextComponent from './context/UserContextComponent'

export const UserContext = React.createContext()

function App() {

  return <>
    <UserContextComponent>
      <div className="container my-5">
        <h1>CartPage using React-Redux</h1>
        <CartCard/>
      </div>
    </UserContextComponent>
  </>
}

export default App
