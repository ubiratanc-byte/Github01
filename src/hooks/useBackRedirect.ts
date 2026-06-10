import { useEffect } from "react";

export function useBackRedirect(url: string) {
  useEffect(() => {
    history.pushState(null, "", location.href);
    const onPop = () => {
      window.location.replace(url);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [url]);
}
