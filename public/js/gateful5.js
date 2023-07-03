// Next js Project steps
// How to use it :-
// Step 1: Create a js folder under public folder (public/js)
// Step 2: Create gateful5.js file under newly created js folder (public/js/gateful5.js) 
// Step 3: Copy generated script and paste into the gateful5.js file under newly created js folder (public/js/gateful5.js)
// Step 4: Declare checkAuth5 function and call that function in useEffect() on route change function _app.js file located at root of the project directory file like,

// Step 4.1 : Import checkAuth5 and useRouter as par below
// import checkAuth5 from "../public/js/gateful5.js" file (public/js/gateful5.js)
// import { useRouter } from "next/dist/client/router";

// Step 4.2 : Put the code in app Function
/*     
// Gateful protocol global code implementation code start
//  If multiple checkAuth functions are there then import it and call it in result,result2 multiple time and in if condition as well call result and result2 
  

const router = useRouter();
  const [displayPages, setDisplayPages] = useState(false);
  const check = async () => {
    const result5 = await checkAuth5();
    // If You have more then one script then call all function and write function as per generated script
    // ex: const result = await checkAuth();
    if (result5) {
      setDisplayPages(true);
    }
  };

  // function call to check Gateful gate script
  React.useEffect(() => {
    check();
  }, [router.asPath]);

  // Gateful protocol global code implementation code end

          
  // Also add condition for { displayPages && <component or pages for app which is called> }
            */
// Step 5: Add script in _app.js for Access LIT methods in Head tag ( import head tag if not present in _app.js file and like import Head from "next/head";  )
// import Head from "next/head";
/*  
      <Head>
            <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> 
            <script onload='LitJsSdk.litJsSdkLoadedInALIT()' src="https://jscdn.litgateway.com/index.web.js"></script>
      </Head>
               */
// Step 6: Recompile or rebuild the Project to run the script

//From here the dynamic script is started [# Copy the code for Step 3]


//default function call like checkAuth(),checkAuth2()
checkAuth5();

//dynamic create Page for Gateful Authorization Page function using DOM method
export default async function checkAuth5() {
    if (window.location.href == "https://gateful.io/xdai") {
        const jwt5 = await sessionStorage.getItem("jwt5");
        let verified, header, payload;

        if (jwt5 != null) {
            const jwtext = await LitJsSdk.verifyJwt({ jwt: jwt5 });
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
                "https://tekdev.teksun.com/litprotocol/images/gateful-logo-blk.png";

            gatefulGatedImg.style.maxWidth = "300px";
            gatefulGatedImg.style.maxHeight = "70px";
            gatefulGatedImg.style.margin = "0px 0px 60px";
            gatefulGatedImg.style.fontFamily = 'Urbanist';

            const gatefulHeader = document.createElement("div");
            gatefulHeader.innerHTML = "OpenMedium";

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
                "Test title";

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
            gatefulChainConditionPara.innerHTML = "Network: xdai";

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
                generateAndVerifiedJWT5();
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
            gatefulPolicyMidText.innerHTML = "We use cookies to optimize your experience."
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
            gatefulPolicyText.setAttribute("href", "https://www.lipsum.com/");
            gatefulPolicyText.setAttribute("target", "_blank");
            gatefulPolicyText.innerHTML = "Test tile";


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
        sessionStorage.removeItem("jwt5");
    };
    //Clear session every 30 min 
    setInterval(clearSession, 1800000);
    return true
}

// generateAndVerifiedJWT5 Function
async function generateAndVerifiedJWT5() {
    if (window.location.href == "https://gateful.io/xdai") {

        var ethAuthSig = await LitJsSdk.checkAndSignAuthMessage({
            chain: "xdai",
        });


        // UnifiedAccessControlConditions generated by shared modal

        var unifiedAccessControlConditions = [{"conditionType":"evmBasic","contractAddress":"0x22C1f6050E56d2876009903609a2cC3fEf83B415","standardContractType":"POAP","chain":"xdai","method":"eventId","parameters":[],"returnValueTest":{"comparator":"=","value":"128734"}},{"operator":"or"},{"conditionType":"evmBasic","contractAddress":"0x22C1f6050E56d2876009903609a2cC3fEf83B415","standardContractType":"POAP","chain":"ethereum","method":"eventId","parameters":[],"returnValueTest":{"comparator":"=","value":"128734"}}]

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
        const jwt5 = await litNodeClient.getSignedToken({
            accessControlConditions: unifiedAccessControlConditions,
            chain: "xdai",
            authSig: ethAuthSig,
            resourceId: window.resourceId,
        });

        sessionStorage.setItem("jwt5", jwt5);
        let verified, header, payload;
        if (jwt5 != null) {
            const jwtext = LitJsSdk.verifyJwt({ jwt: jwt5 });
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

