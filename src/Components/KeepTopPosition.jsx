import { useEffect } from "react";

export default function KeepTopPosition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
