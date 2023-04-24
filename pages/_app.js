import "./style.css";
import React, { useState, useRef, useEffect } from "react";
import checkAuth from "../public/js/gateful.js";
import checkAuth2 from "../public/js/gateful2.js";

import { useRouter } from "next/dist/client/router";
import Head from "next/head";

export default function MyApp({ Component: Component, pageProps: pageProps }) {
  
  const cdnRef = useRef();

   // Gateful protocol global code implementation code start
  //  if multiple checkAuth function is there then call it in result, result2 multiple time and in if condition as well call result and result2  
  const router = useRouter();
  const [displayPages, setDisplayPages] = useState(false);
  const check = async () => {
    const result = await checkAuth();
    const result2 = await checkAuth2();
    const cdnCheckAuthFunc = checkAuth3();;


    const script = document.createElement("script");
    script.src = "https://d3fvarydh99mx0.cloudfront.net/gateful3.js";
    script.async = true;
    let result3;
    script.onload = async() => {
      const authStatus = await checkAuth3();
      result3 =authStatus ;
    }
    document.body.appendChild(script);
    console.log(result3,"result3.........ooooo");

    if (result || result2 || result3) {
      setDisplayPages(true);
    }
  };

  // function call to check Gateful gate script
  React.useEffect(() => {
    check();  
  }, [router.asPath]);

  // Gateful protocol global code implementation end

React.useEffect(() => import("@lottiefiles/lottie-player"));

useEffect(() => {
  const script = document.createElement('script');
  script.src = '/cdn-script.js';
  script.async = true;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}, []);
return (
    <>
 <Head>
              <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
              <script onload='LitJsSdk.litJsSdkLoadedInALIT()' src="https://jscdn.litgateway.com/index.web.js"></script>
                </Head>
      {displayPages && <Component {...pageProps} />}
    </>
  );
}
