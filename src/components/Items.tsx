import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import ItemDetail from "./ItemDetail";

interface dataType {
  definition: string;
  synonyms: string[] | [];
}

const Items = ({ word }: string) => {
  const { data, isLoading } = useQuery<dataType[]>({
    queryKey: ["item", word],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const { data } = res;
      return data[0].meanings[0].definitions;
    },
  });

  const { data: imageURL, isLoading: imgLoading } = useQuery<string>({
    queryKey: ["image", word],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${word}&client_id=${"M8SyDlmMWTWjtOz6YqIJk0yjl0Y12OPKwKDfUiZjqH8"}`
      );
      const { data } = res;
      return data.results[0].urls.raw;
    },
  });

  return (
    <div className="mt-10 flex gap-5 border border-solid border-gray-300 p-10">
      {
        imgLoading ? <h1>Loading...</h1> :
        imageURL && <img src={imageURL} alt={word} className="w-100 h-fit" />
      }
      {isLoading ? <h1>Loading...</h1> : data && (
        <div>
          {data?.map((item) => (
            <ItemDetail
              key={uuidv4()}
              definition={item.definition}
              synonyms={item.synonyms}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;
