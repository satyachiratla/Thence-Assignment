import Button from "./UI/PrimaryButton";
import BrandSvg from "../assets/svgs/brand.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="rounded-full p-5 border border-gray-300 flex justify-between items-center">
      <div>
        <img src={BrandSvg} alt="brand" className="h-10" />
      </div>
      <div className="space-x-5">
        <Link to="/registration">
          <Button styleName="secondary">Get Projects</Button>
        </Link>
        <Button styleName="primary">Onboard Talent</Button>
      </div>
    </nav>
  );
}
