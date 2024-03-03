import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./scroll.css";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="scroll-to-top" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </>
  );
};

export default ScrollToTop;
