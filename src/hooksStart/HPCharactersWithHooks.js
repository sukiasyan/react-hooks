import React, {useState, useEffect} from "react"

export default function HPCharactersWithHooks() {
  const [characters, setCharacters] = useState([])
  const [searchString, setSearchString] = useState("")
  const [filteredCharacters, setFilteredCharacters] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://hp-api.herokuapp.com/api/characters")
        const characters = await res.json()
        setCharacters(characters)
        setFilteredCharacters([...characters])
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  useEffect(() => {
    let filteredCharacters = characters;
    if (searchString && characters.length > 0) {
      filteredCharacters = characters.filter(character =>
        character.name.includes(searchString)
      );
    }
    setFilteredCharacters(filteredCharacters);
  }, [searchString, characters]);

  return (
    <div>
      <h1>Harry Potter</h1>
      <form>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="search for a character"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </form>
      <ul>
        {characters &&
        filteredCharacters.map((character, index) => (
            <li key={index}>
              {console.log("character", character)}
              <h2>{character.name}</h2>
              <p>House: {character.house}</p>
              <img src={character.image} />
            </li>
          ))}
      </ul>
    </div>
  )
}
