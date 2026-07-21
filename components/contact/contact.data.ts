import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface ContactItem {
  icon: any;
  title: string;
  value: string;
  href: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "vaidik@example.com",
    href: "mailto:vaidik@example.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/vaidikchoudhary",
    href: "https://linkedin.com/in/vaidikchoudhary",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/vaidikchoudhary",
    href: "https://github.com/vaidikchoudhary",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, Maharashtra, India",
    href: "https://maps.google.com/?q=Pune,Maharashtra,India",
  },
];