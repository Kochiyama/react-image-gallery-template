import { Link } from "@chakra-ui/react";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { ReactNode } from "react";

interface NavButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  disabled: boolean;
  children: ReactNode;
  side: "left" | "right";
}

export default function NavButton({
  disabled,
  onClick,
  children,
  side,
}: NavButtonProps) {
  return (
    <Link
      type="button"
      className={`image-gallery-icon image-gallery-${side}-nav`}
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
      _hover={{ color: "yellow" }}
      _active={{}}
      fontSize="2rem"
      color="white"
    >
      {children}
    </Link>
  );
}
