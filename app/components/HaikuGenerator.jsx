"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

export default function HaikuGenerator() {
  const [topic, setTopic] = useState("");
  const [poem, setPoem] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const poemRef = useRef(null);

  const generateHaiku = async (event) => {
    event.preventDefault();
    setIsGenerating(true);
    setPoem(`Generating a haiku about <em>${topic}...</em>`);

    if (poemRef.current) {
      poemRef.current.classList.remove("hidden");
      poemRef.current.classList.add("animate-pulse"); // Add 'animate-pulse' when generating
    }

    try {
      const response = await axios.post("/api/generate-haiku", { topic });
      setTimeout(() => {
        setPoem(response.data.poem);
        setIsGenerating(false);
      }, 2200);
    } catch (error) {
      console.error("Error generating poem:", error);
      setPoem("An error occurred while generating the poem. Please try again.");
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (!isGenerating && poemRef.current) {
      // Remove 'animate-pulse' once the poem is ready
      poemRef.current.classList.remove("animate-pulse");
      // poemRef.current.classList.remove("py-6");
      // poemRef.current.classList.add("pt-6");
    }
  }, [isGenerating]);

  return (
    <>
      <div className="form-wrapper bg-white dark:bg-slate-800 dark:text-slate-300 shadow-md px-4 sm:px-16 pt-5 pb-1 mx-4 sm:mx-8 mb-3 sm:mb-4 lg:mb-6 rounded-md">
        <div className="flex justify-center items-center">
          <form
            onSubmit={generateHaiku}
            className="w-full flex justify-evenly"
          >
            <input
              type="text"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter your haiku topic..."
              required
              className="w-full dark:bg-slate-700 dark:text-slate-600 dark:placeholder:text-slate-600 me-4 py-2 sm:py-3 px-4 rounded-3xl text-xs lg:text-base focus:outline-blue-600 dark:focus:outline-none border-2 border-blue-600 dark:border-none"
            />
            <input
              type="submit"
              value="Generate"
              disabled={isGenerating}
              className="rounded-3xl px-6 md:px-7 lg:px-10 bg-blue-600 dark:bg-blue-800 text-white hover:bg-blue-700 hover:cursor-pointer text-xs lg:text-base"
            />
          </form>
        </div>
        <small className="text-[10px] italic text-slate-700 dark:text-slate-400 px-4">
          i.e. Tacos, Nintendo, Cat
        </small>
      </div>
      <div
        ref={poemRef}
        id="poem"
        className="bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-400 border-l-2 border-l-blue-600 dark:border-l-blue-800 border-e-0 shadow-md content-center px-6 sm:px-16 py-6 mx-4 sm:mx-8 my-2 rounded-s-sm rounded-e-md justify-start text-xs/5 lg:text-base/8 hidden animate-pulse"
      >
        {poem && (
          <Typewriter
            options={{
              strings: poem,
              autoStart: true,
              delay: 50,
              cursor: "",
              deleteChars: 1,
            }}
          />
        )}
      </div>
    </>
  );
}
