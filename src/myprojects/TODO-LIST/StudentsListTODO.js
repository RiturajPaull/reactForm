import './styleTODO.css'

function StudentsListTODO(props) {

    const deleteItemFromList = (key) => {
        const newList = props.itemList.filter((itemObj) => {
            return itemObj.key !== key;
        });
        props.setItemList(newList)
    };

    return (
        <div>
            {
                props.itemList.map((itemObj) => {
                    return (
                        <div className="item">
                            <p>{itemObj.data}</p>
                            <button onClick={() => deleteItemFromList(itemObj.key)}>x</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StudentsListTODO;