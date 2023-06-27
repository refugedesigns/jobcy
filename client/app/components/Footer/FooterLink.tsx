import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Typography } from "@mui/material";

type Props = {
  title: string;
  href: string;
};

function FooterLink({ title, href }: Props) {
  return (
    <Link href={href} className="flex items-center hover:text-white">
      <MdKeyboardArrowRight />
      <Typography variant="body2">{title}</Typography>
    </Link>
  );
}

export default FooterLink;
