// src/pages/Login.jsx
import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google sign-in successful!");
    } catch (err) {
      console.error("Google sign-in failed", err);
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => handleSendOtp(),
        },
        auth
      );
    }
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent successfully.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("Phone authentication successful!");
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("Invalid OTP.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-4"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => setShowPhoneLogin(!showPhoneLogin)}
        className="text-sm text-blue-500 underline mb-4"
      >
        {showPhoneLogin ? "Use Google instead" : "Use Phone Number instead"}
      </button>

      {showPhoneLogin && (
        <div className="space-y-4">
          <input
            type="tel"
            placeholder="+260955123456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleSendOtp}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Send OTP
          </button>

          {confirmationResult && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <button
                onClick={handleVerifyOtp}
                className="bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                Verify OTP
              </button>
            </>
          )}
        </div>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}

export default Login;
