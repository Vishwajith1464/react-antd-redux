import {Form, Input, Checkbox, Button, Flex} from "antd";
import "./SignUpForm/signupForm.scss";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCredentials, userLogin } from "../actions";
const SigninForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        dispatch(setCredentials({email, password}));
        dispatch(userLogin());
    }

    return (
       <Form className="form">
        <div className="form-header">
                    Sign in to your account
        </div>
        <Input 
            size="large" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
            size="large" 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Flex justify="space-between">
            <Checkbox>Save password</Checkbox>
            <p>Forgot Password?</p>
        </Flex>
        
        <Button onClick={handleSubmit} size="large">Sign in</Button>
        <div className="form-footer">
            Don't have an account? 
            <Link to="/signup"> Sign up</Link>
        </div>
       </Form>
    )
}

export default SigninForm;