import Image from "next/image";
import GDSC_LOGO from "../../public/gdsc-logo.png";
import { Stars } from '@/components';
import "./styles.css";

const Preloader = () => {
  return (
    <div className="page-loader">
      <div className="loader-decorations">
        <Stars count={15} className="loader-stars" />
      </div>
      <div className="loader">
        <div className="loader-style-1 panelLoad">
          <div className="cube-face cube-face-front">
            <Image src={GDSC_LOGO} alt="GDSC Logo" width={60} height={60} />
          </div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-bottom"></div>
          <div className="cube-face cube-face-top"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
