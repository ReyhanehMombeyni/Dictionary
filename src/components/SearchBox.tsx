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
    <form onSubmit={formHandler}>
        <input type="text" name="search" placeholder="input word..."  />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBox