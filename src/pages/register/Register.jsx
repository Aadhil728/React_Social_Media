import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <Link>
              <button>Register</button>
            </Link>
          </form>

        </div>
        <div className="right">
          <h1>Aadhil <br /> Social.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum officiis unde eum eaque excepturi, ducimus quaerat, odit ipsam molestiae recusandae praesentium dolore et beatae perferendis laudantium ipsum sapiente libero velit.</p>
          <span>Already have an Account? </span>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Register