
function SearchAside(){
    return(
        <div className="search-aside">
            <label>Search</label>
            <input></input>
            <button>Search</button>
        </div>
    )
}

export function Aside() {
    return(
        <div className="aside">
            <SearchAside />
        </div>
    )
}
