import '../styles/Loginpage.css'
import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("users/login", values);
      setLoading(false);
      message.success("Login successful!");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong. Please try again.");
    }
  };

  // Prevent logged-in user from accessing the login page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-page">
      {loading && <Spinner />}
      <div className="login-form-container">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1 className="login-title">Login</h1>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <div className="form-footer">
            <Link to="/register" className="register-link">
              Not a user? Click here to register
            </Link>
            <button type="submit" className="login-btn">Login</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
