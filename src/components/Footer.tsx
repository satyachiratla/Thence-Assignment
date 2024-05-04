import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-10 bg-[#F5F5F5] p-8 rounded-3xl flex justify-between items-center">
      <div>
        <p className="">
          {" "}
          © Talup {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
      <div className="space-x-5">
        <Link to="/" className="underline underline-offset-1">
          Terms & Conditions
        </Link>
        <Link to="/" className="underline underline-offset-1">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
