import type { NextPage } from "next";
import Gallery from "../components/Gallery";

const imagesArray = [
  "/images/alex-loup-hMTB568ur0g-unsplash.jpg",
  "/images/dave-hoefler-gnhWllB0naw-unsplash.jpg",
  "/images/livia-sAVFADKItCo-unsplash.jpg",
  "/images/michael-king-bIrEUo3vwcs-unsplash.jpg",
];

const Home: NextPage = () => {
  return (
    <Gallery
      imageList={imagesArray}
      w="100%"
      maxW="720px"
      bgColor="blue.100"
      p="0.5rem"
      pb="0rem"
    />
  );
};

export default Home;
