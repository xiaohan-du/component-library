import React from 'react';

const Login = () => {
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form action="/auth" method="post">
          <label htmlFor="username">
            <i className="fas fa-user"></i>
          </label>
          <input type="text" name="username" placeholder="Username" id="username" required />
          <label htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
          <input type="password" name="password" placeholder="Password" id="password" required />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  )
}

export default Login;