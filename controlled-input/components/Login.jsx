import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  const handleSubmitDefault = (event) => {
    event.preventDefault()

    console.log(data)

    alert(JSON.stringify(data))
  }

  const handleInputChange = (e, name) => {
    setData({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmitDefault}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
            name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
