import Image from "next/image";
import { Inter } from "next/font/google";
import Block from "@/components/Block";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Oyo</title>
      <link rel="icon" href="/icon.png" />
    </Head>
    <Header1 />
    <Header2 />
    <Header3 />
    <div className="mx-10">
    <div className=" my-14">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className=" h-60 w-full"
          />
        </div>

        <div className=" my-14">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className=" h-30 w-full"
          />
        </div>
        <Header4 />
    </div>
    <Footer />
    </>
  );
}
