
import { useEffect, useRef, useState } from "react";

export default function Otp({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }

    const copyOtpFields = [...otpFields];
    if (key === "Backspace") {
      console.log("Delete clicked");
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (isNaN(key)) {
      return;
    }

    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    setOtpFields(copyOtpFields);
  };

  useEffect(() => {
    ref.current["0"].focus();
  }, []);
  return (
    <div className="container">
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}