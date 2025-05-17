import { Button, Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import "./signupForm.scss";
const SignupForm = () => {
    return (
        <div className="form">
            <Form>
                <div className="form-header">
                    Sign up for an account
                </div>
                <Row gutter={[20, 20]}>
                    <Col span={12}>
                    <Input size="large"
                    placeholder="First Name"
                    />
                    </Col>
                    <Col span={12}>
                    <Input size="large"
                    placeholder="Last Name"
                    />
                    </Col>
                    
                </Row>
                <Input size="large"
                placeholder="Email"
                />
                <Input size="large"
                placeholder="Password"
                />
                <Input size="large"
                placeholder="Confirm Password"
                />
                <Button size="large">Sign Up</Button>
                
                <div className="form-footer">
                    Already have an account? 
                    <Link to="/signin"> Sign in</Link>
                </div>

            </Form>
        </div>
    )
}

export default SignupForm;