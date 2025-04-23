import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#5F66AC] text-white py-6 ">
      <div className="container mx-auto px-4 xl:grid xl:grid-cols-3 flex flex-col gap-4 items-center">
        <div className="relative rounded-full h-30 w-30 z-[1] bg-white overflow-hidden">
          <Image
            src="/images/logo/logo.png"
            alt="adeline"
            fill
            className="object-contain p-2"
          />
        </div>

        <div>
          <p className="font-bold text-xl mb-2 m-1">Contact</p>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="tel:+33661935898"
                className="cursor-pointer flex items-center"
              >
                <PhoneIcon className="w-5 m-1" /> +33 6 61 93 58 98
              </a>
            </li>
            <li>
              <a
                href="tel:+351XXXXXXXXX"
                className="cursor-pointer flex items-center"
              >
                <PhoneIcon className="w-5 m-1" /> +351 xx xx xx xx
              </a>
            </li>
            <li>
              <a
                href="mailto:adeline.porto.immo@gmail.com"
                className="cursor-pointer flex items-center"
              >
                <EnvelopeIcon className="w-5 m-1" />
                adeline.porto.immo@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl mb-2 m-1 xl:text-white text-indigo-500">
            Suivez-nous
          </p>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E1306C]"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2]"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-5 text-sm italic">
        ©Adeline Pereira 2025 - Site réalisé par Cédric Phung
      </p>
    </footer>
  );
};

export default Footer;
