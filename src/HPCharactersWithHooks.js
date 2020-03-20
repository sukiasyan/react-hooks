import React, {useState, useEffect} from "react"

export default function HPCharactersWithHooks() {
  const [characters, setCharacters] = useState("")
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://hp-api.herokuapp.com/api/characters")
        const characters = await res.json()
        setCharacters(characters)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
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
          characters.map((character, index) => (
            <li key={index}>
              <h2>{character.name}</h2>
              <p>House: {character.house}</p>
              <img src={character.image}/>
            </li>
          ))}
      </ul>
    </div>
  )
}
