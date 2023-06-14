import "./style.css";
import React, { useState, useRef, useEffect } from "react";
// import checkAuth from "../public/js/gateful.js";
// import checkAuth2 from "../public/js/gateful2.js";

import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component: Component, pageProps: pageProps }) {

  const cdnRef = useRef();
  const [loadedCount, setLoadedCount] = useState(0);


  // Gateful protocol global code implementation code start
  //  if multiple checkAuth function is there then call it in result, result2 multiple time and in if condition as well call result and result2  
  const router = useRouter();
  const [displayPages, setDisplayPages] = useState(false);

  const cdnUrls = [
    'https://d3fvarydh99mx0.cloudfront.net/gateful.js',
    'https://d3fvarydh99mx0.cloudfront.net/gateful2.js',
    'https://d3fvarydh99mx0.cloudfront.net/gateful3.js',
    'https://d3fvarydh99mx0.cloudfront.net/gateful4.js',
  ];

  const check = async () => {
    // const result = await checkAuth();
    // const result2 = await checkAuth2();
    const result = await window?.checkAuth();
    const result2 = await window?.checkAuth2();
    const result3 = await window?.checkAuth3();
    const result4 = await window?.checkAuth4();

    console.log(result, "result", result2, "result2", result3, "result3", result4, "result4");
    if (result || result2 || result3 || result4) {
      setDisplayPages(true);
    }
  };

  useEffect(() => {
    cdnUrls.forEach((url) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        console.log(`${url} loaded.....`);
        setLoadedCount((prevCount) => prevCount + 1);
      };
      document.body.appendChild(script);
    });
  }, [router.asPath]);

  useEffect(() => {
    if (loadedCount === cdnUrls.length) {
      console.log('All scripts loaded');
      check(); // Call your function here
      setLoadedCount(0);
    }
  }, [loadedCount]);


  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://d3fvarydh99mx0.cloudfront.net/gateful3.js';
  //   script.onload = () => {
  //     check();
  //   };
  //   document.body.appendChild(script);
  // }, [router.asPath]);



  // Gateful protocol global code implementation end

  React.useEffect(() => import("@lottiefiles/lottie-player"));

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <script onload='LitJsSdk.litJsSdkLoadedInALIT()' src="https://jscdn.litgateway.com/index.web.js"></script>

        <script src="https://d3fvarydh99mx0.cloudfront.net/gateful.js" />
        <script src="https://d3fvarydh99mx0.cloudfront.net/gateful2.js" />
        <script src="https://d3fvarydh99mx0.cloudfront.net/gateful3.js" />
        <script src="https://d3fvarydh99mx0.cloudfront.net/gateful4.js" />

      </Head>
      {displayPages && <Component {...pageProps} />}
    </>
  );
}
