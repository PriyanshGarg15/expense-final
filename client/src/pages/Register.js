import '../styles/Registerpage.css'
import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Submit Handler for Registration
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("users/register", values);
      message.success("Registration Successful!");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong. Please try again.");
    }
  };

  // Prevent logged-in user from accessing registration page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="register-page">
      {loading && <Spinner />}
      <div className="register-form-container">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1 className="register-title">Register</h1>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

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
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <div className="form-footer">
            <Link to="/login" className="login-link">
              Already registered? Click here to login
            </Link>
            <button type="submit" className="register-btn">Register</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
