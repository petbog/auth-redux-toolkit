import Form from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from '../store/slices/UserSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const push = useNavigate()


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                push('/');
            })
            .catch(()=>alert('Invaled user!'))
    }
    return (
        <div className="">
            <Form
                title='login'
                handleClick={handleLogin}
            />
        </div>
    )
}


export default Login