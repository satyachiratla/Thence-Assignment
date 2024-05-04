import { useEffect, useState } from "react";
import SuccessSvg from "../../assets/svgs/success.svg";
import { useNavigate } from "react-router-dom";

export default function RegistrationSuccess() {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0) {
      const interval = setInterval(() => {
        setCounter((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      navigate("/");
    }
  }, [counter, navigate]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <img src={SuccessSvg} alt="success" className="mx-auto" />
          <h2 className="font-semibold text-center text-3xl text-[#2DA950] font-coveredByYourGrace">
            Success Submitted
          </h2>
        </div>
        <h3 className="text-center font-semibold text-5xl">Congratulations</h3>
        <p className="text-[#727272] max-w-lg text-center text-xl">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <div className="absolute bottom-5 text-center text-[#727272]">
        Redirection you to Homepage in <strong>{counter} Seconds</strong>
      </div>
    </div>
  );
}
