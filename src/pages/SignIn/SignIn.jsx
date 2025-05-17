import SigninForm from "../../components/signinForm";
import Poster from "../../components/Poster/poster";
import { Flex, Row, Col } from "antd";
const SignIn = () => {
    return (
    <Row className="form-container">
            <Col xs ={24} md={12} >
                <SigninForm/>
            </Col>
            <Col xs={24} md={12} className="poster-container">
                <Poster/>
            </Col>
    </Row>
    )
}

export default SignIn;