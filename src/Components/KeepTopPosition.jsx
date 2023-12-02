import { useEffect } from "react";

const KeepTopPosition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return null;
};

export default KeepTopPosition;
