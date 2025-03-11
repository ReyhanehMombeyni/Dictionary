import { v4 as uuidv4 } from "uuid";

interface dataType {
  definition: string;
  synonyms: string[] | [];
}

const ItemDetail = ({ definition, synonyms }: dataType) => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">
        definition: <span className="text-lg font-medium">{definition}</span>
      </h1>
      <p className="pt-3 text-lg font-bold text-gray-500">
        synonyms:{" "}
        {synonyms.length ? (
          synonyms.map((synonym) => (
            <span key={uuidv4()} className="text-md font-medium text-gray-500">
              {synonym},{" "}
            </span>
          ))
        ) : (
          <span className="text-md font-medium text-gray-500">none</span>
        )}
      </p>
    </div>
  );
};

export default ItemDetail;
