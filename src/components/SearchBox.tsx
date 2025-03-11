interface searchHandlerType {
    searchHandler: (text: string) => void;
};

const SearchBox = ({searchHandler}: searchHandlerType) => {

    function formHandler (e: React.FormEvent<HTMLFormElement>):void {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          search: { value: string };
        };
        searchHandler(target.search.value);
    }

  return (
    <form onSubmit={formHandler} className="flex gap-3 w-xl">
        <input type="text" name="search" className="input input w-full" placeholder="input word..."  />
        <button type="submit" className="btn btn-primary">Search</button>
    </form>
  )
}

export default SearchBox