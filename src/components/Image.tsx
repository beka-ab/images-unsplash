import { ImgProps } from "../types";

const Img = ({ image, setSelectedImage, setModalOpen }: ImgProps) => {
  return (
    <div className="image-box">
      <img
        className="image"
        src={image.urls?.small}
        alt={image?.alt_description}
        onClick={() => {
          setSelectedImage(image);
          setModalOpen(true);
        }}
      />
    </div>
  );
};

export default Img;
