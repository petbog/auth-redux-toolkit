import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div className="">
            <h1 className="">Login</h1>

            <p> or <Link to='/register'>Register</Link></p>
        </div>
    )
}

export default LoginPage