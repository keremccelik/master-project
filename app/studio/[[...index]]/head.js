export { NextStudioHead } from "next-sanity/studio/head";

import { NextStudiHead } from "next-sanity/studio/head";

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
      />
    </>
  );
}
