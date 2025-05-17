import Poster from "../../components/Poster/poster";
import SignupForm from "../../components/SignUpForm/signupForm";
import { Row, Col } from "antd";
import "./signup.css";

const SignUp = () => {
    return (
        <Row className="form-container">
            <Col xs ={24} md={12} >
                <SignupForm/>
            </Col>
            <Col xs={24} md={12} className="poster-container">
                <Poster/>
            </Col>
        </Row>
    )
}

export default SignUp;