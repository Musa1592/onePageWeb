import Head from "next/head";
import Home from '@/component/header'
import Countdown from "@/component/countdown";
import Important from "@/component/important";
import Map from "@/component/Map";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

const OnePage = () => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Imomotimi Ijaw Dance Event</title>
      </Head>
      <Home />
      <Countdown />
      <Important />
      <Map />
      <Contact />
      <Footer />
    </div>
  )
}
export default OnePage;