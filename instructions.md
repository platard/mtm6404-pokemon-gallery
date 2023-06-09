1. Create a React component named 'App' that renders a main title and the Gallery component.
```
  <>
    <h1 className="gallery-title">Pokemon Gallery</h1>
    <Gallery />
  </>
```

2. Create a React component named 'Gallery' that renders a Pokemon gallery. 
```
function Gallery () { }
```
3. Inside the Gallery component, render all the items in the pokedex array using the map method. 
```
    return (
      <div id="gallery" className="gallery">
        {items.map( )}
      </div>
    )
```
4. Each gallery item is represented by a div element with a unique key based on the 'item.id'.
```
      <div key={item.id} className="gallery-item">
        <img className="gallery-item-image" src="" alt={item.name} />
        <h2 className="gallery-item-name">{item.name}</h2>
      </div>
```
5. The id has to be used in the src image attribute to get the proper image.
``` 
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`
```
6. Create a root instance to render the App component inside the root element with the ID "root".
``` 
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App />)
```

## State
Inside the Gallery component, create a 'clickHandler' function that toggles the 'caught' property of the clicked item. Because now the state can change, use a 'estate variable' for the items.

1. Create the estate variable
```    
    const [items, setItems] = React.useState(pokedex)
```
2. Use an 'arrow function' to send a parameter through the function clickHandler when the event attribute onClick() is triggered
``` 
    onClick={() => clickHandler(item)}
```
3. The clickHandler function takes a parameter representing the clicked item.
```    
    function clickHandler (target) { }
```
4. Inside the clickHandler use the map method to iterate over each item. 
```
    items.map(item => XXXX )
```
5. For each item, check if the id of the item matches the id of the parameter. 
```  
  item.id === target.id
```
6. If match, create a new object using the spread syntax ({...item}) to clone the item, and toggles the caught property by using the logical NOT operator (!item.caught).
```
? {...item, caught: !item.caught} 
``` 
- We need to create a new object when updating state in order to ensure proper rendering and state management. Directly modifying the state variable items by changing the caught property of the item could lead to unexpected behavior in React.

7. If don't match, return the original item as is without any modification.
```
        : item
```

8. The map method returns a new array with the modified and unmodified items. Pass the new array of items to the setItems function to update the state variable so React triggers a re-render of the component with the updated items.
```
setItems()
```
9. For each gallery item use conditional statement to render the classes "gallery-item caught" if the 'item' is caught, otherwise render the class "gallery-item"
```
item.caught ? "gallery-item caught" : "gallery-item"
```

---
## Comparison
### Ternary opperator
```
setItems(
  items.map(item => {
     item.id === target.id ? {...item, caught: !item.caught} : item
  })
)
```
### If...else

``` 
setItems(
  items.map(item => { 
    if (item.id === target.id){
      item.caught = !item.caught
      return item
    }else {
      return item
    }
  } )
)
```
