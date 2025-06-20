import { useState } from "react";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp]     = useState("");
  const [verification, setVerification] = useState(null);
  const [showPhone, setShowPhone] = useState(false);
  const navigate = useNavigate();

  /* ---------- Google ---------- */
  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate("/");                               // to home or admin
    } catch (err) {
      alert(err.message);
    }
  };

  /* ---------- Phone ---------- */
  const sendOtp = async () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" },
        auth
      );
    }
    try {
      const result = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setVerification(result);
      alert("OTP sent");
    } catch (err) {
      alert(err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await verification.confirm(otp);
      navigate("/");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  /* ---------- UI ---------- */
  return (
    <div className="max-w-md mx-auto py-10 px-4 text-center">
      <h1 className="text-xl font-semibold mb-6">Login</h1>

      {/* Google */}
      <button
        onClick={handleGoogle}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-4"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => setShowPhone(!showPhone)}
        className="text-sm text-blue-500 underline mb-4"
      >
        {showPhone ? "Use Google instead" : "Use Phone Number instead"}
      </button>

      {/* Phone */}
      {showPhone && (
        <div className="space-y-4">
          <input
            type="tel"
            placeholder="+260955123456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button onClick={sendOtp} className="w-full bg-blue-600 text-white py-2 rounded">
            Send OTP
          </button>

          {verification && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button onClick={verifyOtp} className="w-full bg-green-600 text-white py-2 rounded">
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
