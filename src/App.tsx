import { useState } from "react"
import SearchBox from "./components/SearchBox"
import Items from "./components/items";

interface wordType {
  word: string;
  setWord: (text:string)=> void;
}

function App() {

    const [word, setWord]= useState<wordType | string>("");

    function searchHandler(text:string):void {
      setWord(text)
    }

  return(
    <div className="min-h-screen flex flex-col items-center p-20">
      <SearchBox searchHandler={searchHandler} />
      {
        word && <Items word={word} />
      }
    </div>
  )
}

export default App
