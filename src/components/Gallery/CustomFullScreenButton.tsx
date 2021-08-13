import { Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineFullscreen } from "react-icons/ai";

interface CustomFullscreenButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  disabled: boolean;
}

export default function CustomFullscreenButton({
  disabled,
  onClick,
}: CustomFullscreenButtonProps) {
  return (
    <Link
      type="button"
      className={"image-gallery-icon image-gallery-fullscreen-button"}
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
      _hover={{ color: "yellow" }}
      _active={{}}
      fontSize="2rem"
      color="white"
    >
      <AiOutlineFullscreen />
    </Link>
  );
}
