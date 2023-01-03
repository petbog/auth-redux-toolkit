import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <div className="">
            <h1> Register</h1>

            <p> Alredy have an account?<Link to='/login'>Sind in</Link></p>
        </div>
    )
}

export default RegisterPage