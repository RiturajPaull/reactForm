
function App() {

    const [data, setData] = useState(null);
    const [itemList, updateItemList] = useState([]);
  
    const Input = e => {
      console.warn(e.target.value)
      setData(e.target.value)
    }
  
    const Update = () => {
      updateItemList([...itemList, { item: data, key: Date.now() }]);
      setData("");
    };
    return (
      <div className='App'><br /><br />
      <header>
        <input type='text' value={data} onChange={Input}></input>
        <button onClick={Update}>+</button>
        <List name={itemList} />
      </header>
      </div>
    );
  }
  
  
  export default App;
  