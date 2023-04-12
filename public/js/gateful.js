// Next js Project steps
// How to use it :-
// Step 1: Create a js folder in public (public/js)
// Step 2: Create gateful.js file (src/js/gateful.js file (public/js/gateful.js file (src/js/gateful.js)
// Step 3: Generated script put in the gateful.js file (src/js/gateful.js file
// Step 5: Declare checkAuth function and call that function in useEffect() on route change function in _app.js file like,

// Import checkAuth method in _app.js file
// import checkAuth from "../public/js/gateful.js file (src/js/gateful.js";
// import { useRouter } from "next/dist/client/router";

// Put the code in app Function
/*     
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

          
            also add condition for {displayPages && <component or pages for app which is called> }
            */
// Step 6: Add script in _app.js for Access LIT methods in Head tag( import head tag if not present in _app.js file and like import Head from "next/head";  )
      // import Head from "next/head";
/*  
              <Head>
              <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
                <script onload='LitJsSdk.litJsSdkLoadedInALIT()' src="https://jscdn.litgateway.com/index.web.js"></script>

                </Head>
               */
// Step 7: Recompile or rebuild the Project to run the script
 
   
  //default function call like checkAuth(),checkAuth2()
  checkAuth();

  //dynamic create Page for Gateful Authorization Page function using DOM method
  export default async function  checkAuth() {
    if (window.location.href =="https://gateful.io/demo") {
      const jwt = await sessionStorage.getItem("jwt");
      let verified, header, payload;
  
      if (jwt != null) {
        const jwtext = await LitJsSdk.verifyJwt({ jwt: jwt });
        verified = jwtext.verified;
        payload = jwtext.payload;
        header = jwtext.header;
      }
      if (verified == true && payload.baseUrl == window.location.href) {
        // do something for checked condition
      } else {
        // alert("You're not authorized!");
  
        //dynamic dom creation for gateful gated page
        document.body.innerHTML = "";
  
        const mainPageUnlock = document.createElement("div");
  
        mainPageUnlock.style.display = "flex";
        mainPageUnlock.style.justifyContent = "center";
        mainPageUnlock.style.alignItems = "center";
        mainPageUnlock.style.flexDirection = "column";
        mainPageUnlock.style.height = "100vh";
        mainPageUnlock.style.fontFamily = 'Urbanist';
        mainPageUnlock.style.background =
          "#FFFFFF";
  
        let gatefulGatedImg = document.createElement("img");
        gatefulGatedImg.src =
          "https://tekdev.teksun.com/litprotocol/images/gateful-logo-blk1680759356.png";
  
        gatefulGatedImg.style.maxWidth = "300px";
        gatefulGatedImg.style.maxHeight = "70px";
        gatefulGatedImg.style.margin = "0px 0px 60px";
        gatefulGatedImg.style.fontFamily = 'Urbanist';
  
        const gatefulHeader = document.createElement("div");
        gatefulHeader.innerHTML = "Token Gated Demo";
  
        gatefulHeader.style.display = "flex";
        gatefulHeader.style.justifyContent = "center";
        gatefulHeader.style.alignItems = "center";
        gatefulHeader.style.gap = "10px";
        gatefulHeader.style.fontSize = "40px";
        gatefulHeader.style.color = "#000000";
        gatefulHeader.style.marginBottom = "0px";
        gatefulHeader.style.cursor = "default";
        gatefulHeader.style.textAlign = "center";
        gatefulHeader.style.padding = "0 2rem";
        gatefulHeader.style.fontFamily = 'Urbanist';
        gatefulHeader.style.fontWeight = "700";
  
        const gatefulGatedDiv = document.createElement("div");
  
        gatefulGatedDiv.style.display = "flex";
        gatefulGatedDiv.style.justifyContent = "center";
        gatefulGatedDiv.style.alignItems = "center";
        gatefulGatedDiv.style.flexDirection = "column";
        gatefulGatedDiv.style.gap = "20px";
        gatefulGatedDiv.style.fontFamily = 'Urbanist';

  
        const gatefulMainHeader = document.createElement("p");
        gatefulMainHeader.innerHTML =
          "This is an example of a token gate created by Gateful.";
  
        const gatefulSubMainHeader = document.createElement("p");
        gatefulSubMainHeader.innerHTML = "";
  
        gatefulMainHeader.style.display = "flex";
        gatefulMainHeader.style.justifyContent = "center";
        gatefulMainHeader.style.alignItems = "center";
        gatefulMainHeader.style.flexDirection = "column";
        gatefulMainHeader.style.color = "#0A0A0A";
        gatefulMainHeader.style.fontSize = "18px";
        gatefulMainHeader.style.marginTop = "10px";
        gatefulMainHeader.style.textAlign = "center";
        gatefulMainHeader.style.cursor = "default";
        gatefulMainHeader.style.padding = "0 2rem";
        gatefulMainHeader.style.maxWidth = "920px";
        gatefulMainHeader.style.fontFamily = 'Urbanist';
        gatefulMainHeader.style.fontWeight = "500";
  
        

  
        const gatefulChainConditionPara = document.createElement("p");
        gatefulChainConditionPara.innerHTML = "Network: ethereum";
  
        gatefulChainConditionPara.style.display = "flex";
        gatefulChainConditionPara.style.justifyContent = "center";
        gatefulChainConditionPara.style.alignItems = "center";
        gatefulChainConditionPara.style.flexDirection = "column";
        gatefulChainConditionPara.style.color = "#252192";
        gatefulChainConditionPara.style.fontSize = "18px";
        gatefulChainConditionPara.style.textAlign = "center";
        gatefulChainConditionPara.style.fontWeight = "600";
        gatefulChainConditionPara.style.marginTop = "60px";
        gatefulChainConditionPara.style.cursor = "default";
        gatefulChainConditionPara.style.padding = "0 2rem";
        gatefulChainConditionPara.style.fontFamily = 'Urbanist';
        gatefulChainConditionPara.style.textTransform = 'capitalize';


  
        const verifyBtn = document.createElement("button");
  
        verifyBtn.style.display = "flex";
        verifyBtn.style.justifyContent = "center";
        verifyBtn.style.alignItems = "center";
        verifyBtn.style.maxWidth = "220px";
        verifyBtn.style.width = "100%";
        verifyBtn.style.minHeight = "44px";
        verifyBtn.style.border = "1px solid #DB2763";
        verifyBtn.style.background = "#DB2763";
        verifyBtn.style.color = "#ffffff";
        verifyBtn.style.borderRadius = "6px";
        verifyBtn.style.fontSize = "18px";
        verifyBtn.style.marginTop = "12px";
        verifyBtn.style.cursor = "pointer";
        verifyBtn.style.fontFamily = 'Urbanist';
        verifyBtn.style.fontWeight = '700';


  
        mainPageUnlock.appendChild(gatefulGatedImg);
        mainPageUnlock.appendChild(gatefulGatedDiv);
        mainPageUnlock.appendChild(gatefulHeader);
        mainPageUnlock.appendChild(gatefulMainHeader);
        mainPageUnlock.appendChild(gatefulChainConditionPara);
        mainPageUnlock.appendChild(verifyBtn);
  
        verifyBtn.innerHTML = "Verify";
  
        verifyBtn.addEventListener("click", (e) => {
          generateAndVerifiedJWT();
        });
  
        const gatefulPolicyWrapper = document.createElement("div");
  
        gatefulPolicyWrapper.style.display = "flex";
        gatefulPolicyWrapper.style.justifyContent = "center";
        gatefulPolicyWrapper.style.alignItems = "center";
        gatefulPolicyWrapper.style.textAlign = "center";
        gatefulPolicyWrapper.style.width = "364px";
        gatefulPolicyWrapper.style.paddingBottom = "1.5rem";
        gatefulPolicyWrapper.style.fontFamily = 'Urbanist';
  


        const gatefulPolicyMidText = document.createElement("span");
        gatefulPolicyMidText.innerHTML ="We use cookies to optimize your experience."
        // "We use cookies to optimize your experience By continuing. you agree to our";
  
        gatefulPolicyMidText.style.color = "#000000";
        gatefulPolicyMidText.style.fontSize = "14px";
        gatefulPolicyMidText.style.marginTop = "40px";
        gatefulPolicyMidText.style.cursor = "default";
        gatefulPolicyMidText.style.fontFamily = 'Urbanist';
        gatefulPolicyMidText.style.display = 'flex';
        gatefulPolicyMidText.style.flexDirection = 'column';
        gatefulPolicyMidText.style.lineHeight = '3px';
        gatefulPolicyMidText.style.fontWeight = "500";


  
        const gatefulPolicyText = document.createElement("a");
        gatefulPolicyText.setAttribute("href", "https://www.openmedium.biz/legal/");
        gatefulPolicyText.setAttribute("target", "_blank");
        gatefulPolicyText.innerHTML = "Privacy Policy";

  
        gatefulPolicyText.style.color = "#000000";
        gatefulPolicyText.style.fontWeight = "600";
        gatefulPolicyText.style.fontSize = "14px";
        gatefulPolicyText.style.marginTop = "16px";
        gatefulPolicyText.style.textDecoration = "underline";
        gatefulPolicyText.style.fontFamily = 'Urbanist';
  
        mainPageUnlock.appendChild(gatefulPolicyWrapper);

        gatefulPolicyWrapper.appendChild(gatefulPolicyMidText);
  
        gatefulPolicyMidText.appendChild(gatefulPolicyText);
  
        const currantDiv = document.getElementById("remove");
  
        document.body.insertBefore(mainPageUnlock, currantDiv);
      }
    }

    // function for clearSession 
    function clearSession() {  
      sessionStorage.removeItem("jwt");
    };
    //Clear session every 30 min 
    setInterval(clearSession, 1800000);
    return true
  }
  
  // generateAndVerifiedJWT Function
  async function generateAndVerifiedJWT() {
    if (window.location.href =="https://gateful.io/demo") {
  
      var ethAuthSig = await LitJsSdk.checkAndSignAuthMessage({
        chain: "ethereum",
      });
  
    
    // UnifiedAccessControlConditions generated by shared modal

    var unifiedAccessControlConditions = [{"conditionType":"evmBasic","contractAddress":"","standardContractType":"","chain":"ethereum","method":"eth_getBalance","parameters":[":userAddress","latest"],"returnValueTest":{"comparator":">=","value":"68100000000000000"}}]
  
      const randomUrlPath =
        "/" +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      window.resourceId = {
        baseUrl: window.location.href,
        path: randomUrlPath, // this would normally be your url path, like "/webpage.html" for example
        orgId: "",
        role: "",
        extraData: "",
      };
  
      // now, when you want to use the auth sigs, pass them as an object, with the key being the chain name.
      await litNodeClient.saveSigningCondition({
        unifiedAccessControlConditions,
        authSig: {  
          ethereum: ethAuthSig, // note that the key here is "ethereum" for any and all EVM chains.  If you're using Polygon, for example, you should still have "ethereum" here.
        },
        resourceId: window.resourceId,
      });
      const jwt = await litNodeClient.getSignedToken({
        accessControlConditions: unifiedAccessControlConditions,
        chain: "ethereum",
        authSig: ethAuthSig,
        resourceId: window.resourceId,
      });

      sessionStorage.setItem("jwt", jwt);
      let verified, header, payload;
      if (jwt != null) {
        const jwtext = LitJsSdk.verifyJwt({ jwt : jwt});
        verified = jwtext.verified;
        payload = jwtext.payload;
        header = jwtext.header;
      }
  
      if (verified == true && payload.baseUrl == window.location.href) {
        alert("You're authorized!");
        window.location.reload();
      } else {
        alert("You're not authorized!");
      }
    }
  }
