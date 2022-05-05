import React, { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const email_ref = useRef("");
  const password_ref = useRef("");

  const btn_log_in = (e) => {
    e.preventDefault();
    const fd = {
      email: email_ref.current.value,
      password: password_ref.current.value,
    };
    const auth = getAuth();
    signInWithEmailAndPassword(auth, fd.email, fd.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  ///
  const UI = (
    <>
      <div>
        <form className="">
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

          <button
            className="bg-green-500 my-2 p-1 rounded "
            onClick={btn_log_in}
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
  return UI;
};
