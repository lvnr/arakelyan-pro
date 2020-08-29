import "../styles/globals.scss";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Menu from "../components/menu";

function MyApp({ Component, pageProps, router }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 1000 };
  const pointerX = useSpring(cursorX, springConfig);
  const pointerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMouseMove = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      cursorX.set(x);
      cursorY.set(y);
    };

    document.body.addEventListener("mousemove", onMouseMove);
  }, []);

  const variants = {
    pageInitial: {
      opacity: 0,
      y: -100,
      transition: { ease: "easeInOut", duration: 0.2 },
    },
    pageEnter: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    pageExit: {
      opacity: 0,
      y: 100,
      transition: { ease: "easeInOut", duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      <Menu />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageEnter"
        exit="pageExit"
        variants={variants}
      >
        <Component {...pageProps} />
        <div className="cursor">
          <motion.div
            className="cursor__circle"
            style={{ translateX: pointerX, translateY: pointerY }}
          >
            <svg height="32" width="32">
              <circle cx="16" cy="16" r="8"></circle>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
