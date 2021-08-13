import React from "react";
import { Link } from "@chakra-ui/react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

interface CustomPlayPauseButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
  isPlaying: boolean;
}

export function CustomPlayPauseButton({
  isPlaying,
  onClick,
}: CustomPlayPauseButtonProps) {
  return (
    <Link
      type="button"
      className={"image-gallery-icon image-gallery-play-button"}
      onClick={onClick}
      aria-label="Previous Slide"
      _hover={{ color: "yellow" }}
      fontSize="2rem"
      color="white"
    >
      {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
    </Link>
  );
}
