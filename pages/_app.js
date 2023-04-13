import "./style.css";
import checkAuth from "../public/js/gateful.js file (src/js/gateful.js";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

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
