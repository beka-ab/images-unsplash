import { useRef } from "react";
import Images from "../components/Photos";
import Modal from "../components/Modal";
import { useKey } from "../helper/useCustom";
import { HomeProps } from "../types";

const Home = ({
  query,
  setQuery,
  images,
  isLoading,
  setStatus,
  popularImg,
  status,
  modalOpen,
  setModalOpen,
  selectedImage,
  setSelectedImage,
}: HomeProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
    setQuery("");
  });

  const handleQuery = (e: any) => {
    setQuery(e.target.value);
    setStatus("searching");
  };

  return (
    <div className="home">
      <h1 className="heading"> Photo Gallery</h1>

      <div className="search-container">
        <input
          className="search"
          type="text"
          value={query}
          onChange={handleQuery}
          placeholder="Search ..."
          ref={inputEl}
        />
      </div>
      <Images
        popularImg={popularImg}
        images={images}
        isLoading={isLoading}
        status={status}
        setSelectedImage={setSelectedImage}
        setModalOpen={setModalOpen}
      />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default Home;
