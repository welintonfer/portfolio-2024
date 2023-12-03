import { useRef } from "react";
import mail from "../assets/img/mailbox.svg";
import copy from "../assets/img/copy.svg";

const CopyToClipboard = ({ value, label }) => {
  const inputRef = useRef();

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  const ton = "portfolio.fernandes@gmail.com";

  return (
    <div className="box-mail">
      <div className="icon-mail">
        <img src={mail} alt="Email" />
      </div>
      <input
        className="mail"
        ref={inputRef}
        type="text"
        value={ton}
        aria-label={label}
        readOnly
      />
      <div className="input-btn-copy">
        <button
          className="icon-copy"
          onClick={copyToClipboard}
          data-copy-feedback="Copied!"
          data-tooltip-direction="n"
        >
          <img src={copy} alt="Copy" />
        </button>
      </div>
    </div>
  );
};

export default CopyToClipboard;
