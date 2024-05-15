"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Button } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.signinContainer}>
      <form className={styles.signinForm} onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
