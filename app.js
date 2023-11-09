const pokedex = [
    { id: 1, name: 'bulbasaur', caught: false },
    { id: 2, name: 'ivysaur', caught: false },
    { id: 3, name: 'venusaur', caught: false},
    { id: 4, name: 'charmander', caught: false },
    { id: 5, name: 'charmeleon', caught: false },
    { id: 6, name: 'charizard', caught: false },
    { id: 7, name: 'squirtle', caught: false },
    { id: 8, name: 'wartortle', caught: false },
    { id: 9, name: 'blastoise', caught: false },
    { id: 10, name: 'caterpie', caught: false },
    { id: 11, name: 'metapod', caught: false },
    { id: 12, name: 'butterfree', caught: false },
    { id: 13, name: 'weedle', caught: false },
    { id: 14, name: 'kakuna', caught: false },
    { id: 15, name: 'beedrill', caught: false },
    { id: 16, name: 'pidgey', caught: false },
    { id: 17, name: 'pidgeotto', caught: false },
    { id: 18, name: 'pidgeot', caught: false },
    { id: 19, name: 'rattata', caught: false },
    { id: 20, name: 'raticate', caught: false }
  ]

  function App(){
    

    return (
      <>
        <h1 className="gallery-title">Pokemon Gallery</h1>
        <Gallery items={pokedex}  />
      </>
    )

  }

  function Gallery (props) {
    const [items, setItems] = React.useState(props.items)

    function clickHandler (target) { 
      setItems( items.map(item => item.id === target.id ? {...item, caught: !item.caught} : item ) )
      
    }

    return (
      <div id="gallery" className="gallery">
        {items.map( item => 
          <div key={item.id} 
                className={item.caught ? "gallery-item caught" : "gallery-item"} 
                onClick={() => clickHandler(item)}>
            <img className="gallery-item-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt={item.name} />
            <h2 className="gallery-item-name">{item.name}</h2>
          </div>
          )}
      </div>
    )

  }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)