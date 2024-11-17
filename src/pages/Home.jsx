import FlexibleComponent from "../components/FlexibleComponent";
import Principal from "../components/Principal";
import Opinions from "../components/Opinions";
import HowItWorks from "../components/HowItWorks";
import JoinNow from "../components/JoinNow";
import Background from "../components/Background";


function Home() {


    return (
        <div>
            <Principal />
            <FlexibleComponent title="Our Services" subtitle="National Brand With a Local Feel. Experience the Fetch! Difference" />
            <Opinions />
            <HowItWorks />
            <JoinNow />
        </div>
    );
}

export default Home;