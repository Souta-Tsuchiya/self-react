import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react'

export const useBgColor = () => {
  const router = useRouter();
  const bgColor = useMemo(() => {
    // return router.pathname === "/" ? "lightblue" : "teal";

    switch(router.pathname){
      case "/":
        return "lightblue";
      case "/about":
        return "teal";
      default:
        return "";
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor]);
}
