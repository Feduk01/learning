import UserContext from '../context/UserContext'
import { useContext, useState } from 'react'
function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)
  const [inputValue, setInputValue] = useState('')
  //   const [clicked, setClicked] = useState(false)

  //   const changeHandler = () => {
  //     if (!clicked) {
  //       setClicked(true)
  //       setUser('Bohdan')
  //     } else if (clicked) {
  //       setClicked(false)
  //       setUser('Fedor')
  //     }
  //   }

  const changeHandler = () => {
    changeUserName(inputValue)
    setInputValue('')
  }

  return (
    <section>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={changeHandler}>Change username</button>
    </section>
  )
}

export default ChangeUser
