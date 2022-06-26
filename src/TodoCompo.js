import React from 'react'

function Practice(props){
    const deleteItemFromList=(key)=>{
          const newList=props.itemList.filter((itemObj2)=>{
              return itemObj2.key !== key
         })
         props.setListItem(newList)
    }
    return(
        <div className='Practice'>
            <div className='container1'>
                 {
            props.listItem.map((itemObj)=>{
             return(
                <div className='container2'>
                    <p>{itemObj.new}</p>
                    <button onClick={()=>deleteItemFromList(itemObj.key)}>x</button>
                </div>
             )
            })
        }
            </div>
        </div>
    )
}

export default Practice