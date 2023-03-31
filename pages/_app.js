import "./style.css";
import React, { useState } from "react";
import checkAuth from "../public/js/turbovirtual.js";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

export default function MyApp({ Component: Component, pageProps: pageProps }) {
  // Turbo Virtual protocol globle code implemantetion start
  const router = useRouter();
  const [displayPages, setDisplayPages] = useState(false);
  const check = async () => {
    const result = await checkAuth();
    if (result) {
      setDisplayPages(true);
    }
  };

  // function call to check Turbo Virtual gate script
  React.useEffect(() => {
    console.log(router, "router........");
    check();
  }, [router.asPath]);

  // Turbo Virtual protocol globle code implemantetion end

  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return (
    <>
      <Head>
        <script
          onload="LitJsSdk.litJsSdkLoadedInALIT()"
          src="https://jscdn.litgateway.com/index.web.js"
        ></script>
      </Head>
      {displayPages && <Component {...pageProps} />}
    </>
  );
}
