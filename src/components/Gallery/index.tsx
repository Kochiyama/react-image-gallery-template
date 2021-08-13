import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import { BoxProps, Box } from "@chakra-ui/layout";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { ImCircleRight, ImCircleLeft } from "react-icons/im";
import NavButton from "./NavButton";
import CustomFullscreenButton from "./CustomFullScreenButton";
import { CustomPlayPauseButton } from "./CustomPlayPauseButton";

interface GalleryProps extends BoxProps {
  imageList: string[];
}

export default function Gallery({ imageList, ...rest }: GalleryProps) {
  const images: ReactImageGalleryItem[] = imageList.map(url => {
    return {
      original: url,
      thumbnail: url,
    };
  });

  return (
    <Box {...rest}>
      <ImageGallery
        items={images}
        slideDuration={450}
        slideInterval={3000}
        renderLeftNav={(onClick, disabled) => (
          <NavButton onClick={onClick} disabled={disabled} side="left">
            <ImCircleLeft />
          </NavButton>
        )}
        renderRightNav={(onClick, disabled) => (
          <NavButton onClick={onClick} disabled={disabled} side="right">
            <ImCircleRight />
          </NavButton>
        )}
        renderFullscreenButton={(onClick, disabled) => (
          <CustomFullscreenButton onClick={onClick} disabled={disabled} />
        )}
        renderPlayPauseButton={(onClick, isPlaying) => (
          <CustomPlayPauseButton onClick={onClick} isPlaying={isPlaying} />
        )}
      />
    </Box>
  );
}
