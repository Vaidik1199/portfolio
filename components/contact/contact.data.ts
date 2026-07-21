import { ComponentType } from "react";
import { Mail, MapPin } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export interface ContactItem {
  icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  value: string;
  href: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "vaidikhc@email.com",
    href: "mailto:vaidikhc@email.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/vaidik-choudhary-a21b40294/",
    href: "https://www.linkedin.com/in/vaidik-choudhary-a21b40294/",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Vaidik1199",
    href: "https://github.com/Vaidik1199",
  },
  {
    icon: FaXTwitter,
    title: "X (Twitter)",
    value: "x.com/Vaidikhc",
    href: "https://x.com/Vaidikhc",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    value: "instagram.com/vaidikhc.99",
    href: "https://www.instagram.com/vaidikhc.99/",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, Maharashtra, India",
    href: "https://maps.google.com/?q=Pune,Maharashtra,India",
  },
];