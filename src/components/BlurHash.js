import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import styles from "./BlurHash.module.css";
import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import db from "../data/db.json";
const BlurHash = () => {
  const [getImages, setGetImages] = useState([]);
  //   const {
  //     data: images,
  //     isPending,
  //     error,
  //   } = useFetch("http://localhost:3000/images");
  useEffect(() => {
    if (db.images) {
      console.log(db);

      setGetImages(db.images);
    }
  }, [db.images]);
  return (
    <>
      {getImages &&
        getImages.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image.url}
            width={300}
            height={300}
            effect="blur"
            placeholder={
              <Blurhash
                hash="LLQ]pCRP.Tt6_Nt7IAR%.At7V?f8"
                width={300}
                height={300}
              />
            }
          />
        ))}
    </>
  );
};

export default BlurHash;
