import { Link } from "react-router-dom"
import Login from "../components/Login"

const LoginPage = () => {
    return (
        <div className="">
            <h1 className="">Login</h1>
            <Login/>
            <p> or <Link to='/register'>Register</Link></p>
        </div>
    )
}

export default LoginPage