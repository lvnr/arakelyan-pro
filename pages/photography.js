import { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./photography.module.scss";
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
  transform,
  useSpring,
} from "framer-motion";

const photos = {
  street: {
    folder: "/levon-arakelyan-photography/street/",
    filenames: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
    ],
  },
  portrait: {
    folder: "/levon-arakelyan-photography/portrait/",
    filenames: ["a-boy-in-noratus-cemetery-armenia-bw-portrait.jpg"],
  },
};

const photo = (path) => (
  <section key={path}>
    <figure style={{ backgroundImage: `url(${path})` }} />
  </section>
);

export default function Photography() {
  const slideCount = Object.keys(photos)
    .map((key) => photos[key].filenames.length)
    .reduce((a, b) => a + b);

  const { scrollYProgress } = useViewportScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `${slideCount * -100 + 100}vw`]
    // { ease: (n) => n * n }
  );

  // for (let i = 0; i < $hover.length; i++) {
  //   $hover[i].addEventListener("mouseenter", onMouseHover);
  //   $hover[i].addEventListener("mouseleave", onMouseHoverOut);
  // }

  // const zoomOut = useMotionValue(1);

  // useEffect(() => {
  //   function updateVelocity() {
  //     const scrollVelocity = Math.abs(scrollYProgress.getVelocity());
  //     console.log(scrollVelocity);
  //     const scale = transform(scrollVelocity, [0, 1], [1, 0.5], {
  //       clamp: false,
  //     });
  //     zoomOut.set(scale);
  //   }

  //   const unsubscribeX = scrollYProgress.onChange(updateVelocity);

  //   return () => {
  //     unsubscribeX();
  //   };
  // }, []);

  return (
    <div className="container">
      <Head>
        <title>Levon Arakelyan Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.viewport}>
          <motion.div className={styles.sections} style={{ translateX: x }}>
            {photos.street.filenames.map((path) =>
              photo(photos.street.folder + path)
            )}
          </motion.div>
        </div>
      </main>

      <div
        className={styles.scrollDummy}
        style={{ height: `${slideCount * 100 - 100}vw` }}
      />
    </div>
  );
}
