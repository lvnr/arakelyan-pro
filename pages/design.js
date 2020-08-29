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
  audio: {
    folder: "/product-design-and-3d/arakelyan-acoustics/",
    filenames: [
      "arakelyan-byurakan-hero.jpg",
      "arakelyan-byurakan-front.jpg",
      "arakelyan-byurakan-macro.jpg",
      "arakelyan-byurakan-side.jpg",
      "arakelyan-byurakan-back.jpg",
      "arakelyan-byurakan-construction.jpg",
      "arakelyan-overture-1.jpg",
      "arakelyan-overture-2.jpg",
      "arakelyan-overture-3.jpg",
      "arakelyan-overture-4.jpg",
      "arakelyan-overture-parts.jpg",
      "arakelyan-ashtarak-hero.jpg",
      "arakelyan-ashtarak-front.jpg",
      "arakelyan-ashtarak-logo-plate.jpg",
      "arakelyan-ashtarak-back.jpg",
      "arakelyan-ashtarak-outdoors.jpg",
    ],
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

  return (
    <div className="container">
      <Head>
        <title>Levon Arakelyan - Design &amp; 3D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.viewport}>
          <motion.div className={styles.sections} style={{ translateX: x }}>
            {photos.audio.filenames.map((path) =>
              photo(photos.audio.folder + path)
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
