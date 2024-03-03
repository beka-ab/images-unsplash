import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="loader-bottom">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
};

export default Loader;
