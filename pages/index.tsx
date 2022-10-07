import type { GetStaticProps, NextPage } from "next";
import * as Styles from "../components/Home/Home.css";

const md = `
This is some example text. It should be red.

Notice that the expected global styles are not applied.

If you edit the Home.css.ts file, the styles will be applied.
`;

export const getStaticProps: GetStaticProps = async () => {
  const { micromark } = await import("micromark");
  const html = micromark(md);
  return {
    props: {
      html,
    },
  };
};

const Home: NextPage<{ html: string }> = ({ html }) => {
  console.log("Styles", Styles);
  return (
    <div
      className={Styles.container}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Home;
