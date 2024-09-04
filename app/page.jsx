import Header from "./components/Header";
import HaikuGenerator from "./components/HaikuGenerator";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-slate-800 w-full px-3 sm:px-12 md:px-24 lg:px-60 xl:px-[25%]">
        <h2 className="text-slate-800 dark:text-slate-300 text-xl md:text-3xl lg:text-4xl text-center font-semibold my-4 md:mt-6 lg:my-8">
          AI Haiku Poem Generator
        </h2>
        <HaikuGenerator />
      </main>
      <Footer />
    </>
  );
}
