import Head from "next/head";
import CoolPottery from "../components/icons/CoolPottery";
const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/cool-pottery-black.png" />
    </Head>
    Cool Pottery
    <img src="/cool-pottery-blue.png" />
    <CoolPottery fill="blue" size="16px" stroke="yellow" />
  </div>
);

export default Home;
