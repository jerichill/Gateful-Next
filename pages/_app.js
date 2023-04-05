import "./style.css";
import React, { useState } from "react";
import checkAuth from "../public/js/gateful.js";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

export default function MyApp({ Component: Component, pageProps: pageProps }) {
   
  // Gateful protocol global code implemantetion start
  // if multiple checkAuth function is there than call in check function like, 
  const router = useRouter();
  const [displayPages, setDisplayPages] = useState(false);
  const check = async () => {
    const result = await checkAuth();
    if (result) {
      setDisplayPages(true);
    }
  };

  // function call to check Gateful gate script
  React.useEffect(() => {
    check();
  }, [router.asPath]);

  // Gateful protocol global code implemantetion end

  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return (
    <>
 <Head>
              <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
              <script onload='LitJsSdk.litJsSdkLoadedInALIT()' src="https://jscdn.litgateway.com/index.web.js"></script>

                </Head>
      {displayPages && <Component {...pageProps} />}
    </>
  );
}
