/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

import { faEye, faDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ModalProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = "PS42lTr_bUk9aFQuXpup3MgIBUQ9EhDcOCwlccrOHnU";
const BASE_URL = "https://api.unsplash.com/";

const Modal = ({ modalOpen, selectedImage, setModalOpen }: ModalProps) => {
  if (!modalOpen || !selectedImage) {
    return null;
  }
  const [statistics, setStatistics] = useState<any>({});

  useEffect(() => {
    const fetchData = async (id: string) => {
      const response = await fetch(
        `${BASE_URL}photos/${id}/statistics?client_id=${API_KEY}`
      );
      const statisticshData = await response.json();
      setStatistics(statisticshData);
    };
    fetchData(selectedImage.id);
  }, [selectedImage]);

  return (
    <div className="modal">
      <div className="modal-window">
        <img
          className="modal-img"
          src={selectedImage.urls.full}
          alt={selectedImage.alt_description}
        />
        <div className="modal-stats">
          <p>
            <FontAwesomeIcon icon={faDownload} />
            <strong>
              {statistics?.downloads?.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faEye} />
            <strong>
              {statistics?.views?.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faHeart} />{" "}
            <strong>{selectedImage.likes}</strong>
          </p>
        </div>
        <button className="modal-btn" onClick={() => setModalOpen(false)}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Modal;
