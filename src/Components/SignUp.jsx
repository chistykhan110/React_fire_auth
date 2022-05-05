import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const name_ref = useRef("");
  const email_ref = useRef("");
  const password_ref = useRef("");
  const confirm_password_ref = useRef("");

  const btn_sign_up = (e) => {
    e.preventDefault();
    const fd = {
      name: name_ref.current.value,
      email: email_ref.current.value,
      password: password_ref.current.value,
      confirmPassword: confirm_password_ref.current.value,
    };
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, fd.email, fd.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error Occurred due to  ${error}`);
        // ..
      });
  };
  ///
  const UI = (
    <>
      <div>
        <form className="">
          <label className="block">
            Your Name
            <input
              className="block border-2 rounded border-green-500 "
              type="text"
              ref={name_ref}
            />
          </label>
          <label className="block">
            Email
            <input
              className="block border-2 rounded border-green-500 "
              type="text"
              ref={email_ref}
            />
          </label>
          <label className="block">
            Password
            <input
              className="block border-2 rounded border-green-500 "
              type="text"
              ref={password_ref}
            />
          </label>
          <label className="block">
            Confirm Password
            <input
              className="block border-2 rounded border-green-500 "
              type="text"
              ref={confirm_password_ref}
            />
          </label>
          <button
            className="bg-green-500 my-2 p-1 rounded "
            onClick={btn_sign_up}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
  return UI;
};
