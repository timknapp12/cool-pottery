import Head from "next/head";
import Flexbox from "../components/commonStyles/Flexbox";

// TODO Replace favicon!!!!
const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/cool-pottery-black.png" />
    </Head>
    <Flexbox>
      <Flexbox flexDirection="column">
        <h1>Welcome to Coolpottery.art</h1>
        <h2>
          This site is currently being built so come back and see us sometime :)
        </h2>
      </Flexbox>
    </Flexbox>
  </div>
);

export default Home;
