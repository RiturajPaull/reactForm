

import './myprojects/TODO-LIST/styleTODO.css'
import StudentsListTODO from './myprojects/TODO-LIST/StudentsListTODO'
import React, { useState, useRef } from 'react'


function App() {
    const [item, setItem] = useState("")
    const [itemList, setItemList] = useState([])
    const inputRef = useRef()
    
    const getInput = (e) => {
        setItem(e.target.value)
    }

    const addItemInTheList = () => {
        setItemList([...itemList, { data: item, key: Date.now() }])
        setItem("")
        inputRef.current.focus()
    }
    return (
        <div className='App'>
            <div className='App-wrapper'>
                <div className='wrapper'>
                    <div className='input-wrapper'>
                        <input type='text' onChange={getInput} value={item} ref={inputRef}></input>
                        <button onClick={addItemInTheList}>+</button>
                    </div>
                    <StudentsListTODO itemList={itemList} setItemList={setItemList} />
                </div>
            </div>
        </div>
    )
}

export default App;