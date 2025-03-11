import { v4 as uuidv4 } from 'uuid';

interface dataType {
    definition: string;
    synonyms: string[] | [];
}

const ItemDetail = ({definition, synonyms}: dataType) => {
  return (
    <div className="p-10 border border-solid border-gray-500">
       <h1>{definition}</h1>
        {
            synonyms.length && synonyms.map(synonym => <span key={uuidv4()}>{synonym}, </span>)
        }
    </div>
  )
}

export default ItemDetail