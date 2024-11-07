import Head from "next/head";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Counters from "../components/home/Counters";
import MainFocus from "../components/home/MainFocus";
import FeaturedListings from "../components/home/FeaturedListings";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Real Estate Site My Oliver Elias. Home"
        />
      </Head>
      <Hero />
      <About />
      <Counters />
      <MainFocus />
      <FeaturedListings />
    </div>
  );
}
