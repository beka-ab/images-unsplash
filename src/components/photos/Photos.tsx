import { ImagesProps } from "../../types";
import Img from "../image/Image";
import Loader from "../Loader";
import "./photos.css";

const Images = ({
  images,
  isLoading,
  popularImg,
  status,
  setSelectedImage,
  setModalOpen,
}: ImagesProps) => {
  return (
    <div className="img-container">
      {status === "searching"
        ? images?.map((image) => (
            <Img
              image={image}
              setSelectedImage={setSelectedImage}
              setModalOpen={setModalOpen}
              key={crypto.randomUUID()}
            />
          ))
        : popularImg?.map((image) => (
            <Img
              image={image}
              setSelectedImage={setSelectedImage}
              setModalOpen={setModalOpen}
              key={crypto.randomUUID()}
            />
          ))}
      {isLoading && <Loader />}
    </div>
  );
};

export default Images;
