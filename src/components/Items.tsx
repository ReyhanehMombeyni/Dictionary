import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

import ItemDetail from "./ItemDetail";

interface dataType {
    definition: string;
    synonyms: string[] | [];
}

const Items = ({word}:string) => {

    const {data}= useQuery<dataType[]>({
        queryKey:["item", word],
        queryFn: async()=>{
            const res=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const {data}=res;
            return data[0].meanings[0].definitions;
        }
    })

    const {data: imageURL}= useQuery<string>({
        queryKey:["image", word],
        queryFn: async() => {
            const res=await axios.get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${"M8SyDlmMWTWjtOz6YqIJk0yjl0Y12OPKwKDfUiZjqH8"}`);
            const {data}=res;                                    
            return data.results[0].urls.raw;
        }
    })


  return (
    <div>
        {
            imageURL && <img src={imageURL} alt={word} />
        }
        {
            data && data?.map(item => <ItemDetail key={uuidv4()} definition={item.definition} synonyms={item.synonyms} />)  
        }
    </div>
  )
}

export default Items