"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [wordList, setWordList] = useState([]);

  async function getdata() {
    const data = await fetch(
      "https://random-word-api.herokuapp.com/word?number=100"
    );
    const newdata = await data.json();
    setWordList(newdata);
  }

  useEffect(() => {
    setTimeout(()=>{
      getdata();
    },1000)
  });

  return (
    <>
    <div className="w-full h-screen flex justify-center break-all flex-row bg-black font-mono text-lg text-green-500">
      {wordList.map((data) => {
        return (
          <h1 key={data}>
            {data}
          </h1>
        )
      })}
      </div>
    </>
  );
}