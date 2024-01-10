import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "../styles/_login.scss";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="login">
      <h3>Login</h3>

      <section className="loginFields">
        <div className="fields">
          <label htmlFor="">Gender</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="fields">
          <label>Date of Birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="socialLogin">
          <p>Already Signed In</p>
          <button>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
