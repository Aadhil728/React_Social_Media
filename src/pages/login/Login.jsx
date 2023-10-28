import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to <br /> Aadhil.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum officiis unde eum eaque excepturi, ducimus quaerat, odit ipsam molestiae recusandae praesentium dolore et beatae perferendis laudantium ipsum sapiente libero velit.</p>
          <span>Don't you have an Account? </span>
          <Link to={'/register'}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <Link to={''}>
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login