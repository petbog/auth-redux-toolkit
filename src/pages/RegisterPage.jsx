import { Link } from "react-router-dom"
import SignUp from "../components/SignUp"

const RegisterPage = () => {
    return (
        <div className="">
            <h1> Register</h1>
            <SignUp/>
            <p> Alredy have an account?<Link to='/login'>Sind in</Link></p>
        </div>
    )
}

export default RegisterPage