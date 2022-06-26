import React from 'react'
import './Todo.css'

function Normal(porps) {

  const deleteItemFromTheList = (key) => {
    const newList=porps.itemList.filter((itemObj2) => {
      return itemObj2.key!==key
    })
    porps.setItemList(newList)
  }
  return (
    <div className="normal">
      <div className="container1">
        {
          porps.itemList.map((itemObj) => {
            return (
              <div className="container2">
                <p>{itemObj.data}</p>
                <button onClick={() => deleteItemFromTheList(itemObj.key)}>X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Normal;