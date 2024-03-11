/* eslint-disable default-case */
import { useEffect, useState } from "react";
import "./signIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailErorr] = useState("Емейл не может быть пустым");
  const [passwordError, setPasswordErorr] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  /*   const emailHandler = (e) => {
    setEmail(e.target.value);
    let re =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value).toLowerCase()) {
      setEmailErorr("Некорректный емейл");
      if (!e.target.value) {
        setPasswordErorr("Пароль не может быть пустым");
      }
    } else {
      setEmailErorr("");
    }
  }; */
  const handelClickSignIn = () => {
    navigation("/Films");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 3) {
      setEmailErorr("Емейл должен иметь не менее 3 символов");
    } else {
      setEmailErorr("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordErorr("Пароль должен иметь не менее 3 символов");
    } else {
      setPasswordErorr("");
    }
  };
  return (
    <div className="conteiner conteiner-sign_in ">
      <div className="header-logo">
        <span className="header-logo-left">pix</span>
        <span className="header-logo-right">ema</span>
      </div>
      <form className="sign_in-form">
        <h2>Sign in</h2>
        <span className="sign_in-form-text">Email</span>
        <input
          className="sign_in-form-input"
          onBlur={(e) => blurHandler(e)}
          value={email}
          name="email"
          type="text"
          onChange={(e) => emailHandler(e)}
          placeholder="Your email"
        />
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <span className="sign_in-form-text">Password</span>
        <input
          className="sign_in-form-input"
          value={password}
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="text"
          onChange={(e) => passwordHandler(e)}
          placeholder="Your password"
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <span className="sign_in-form-text-FP">Forgot password?</span>
        <button
          className="sign_in-form-button"
          onClick={handelClickSignIn}
          disabled={!formValid}
        >
          Sign in
        </button>
        <div className="sign_in-form-regestration">
          <span className="sign_in-form-regestration-text">
            Don't have an account?{" "}
          </span>
          <span className="sign_in-form-regestration-link">Sign Up</span>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
