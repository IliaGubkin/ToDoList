import { useState } from 'react';

function Item() {
    function activateEditMode() {
        setEditMode(true)
    }

    function deactivateEditMode() {
        setEditMode(false)
    }
    
    function activateItemAdd() {
        changeValue()
        setItemAdd({...itemAdd, ...value})
    }
    function changeValue() {
        setValue({item: "test"})
    }

   

    let testValue = {item1: "asdfsadf"}
   
    let [itemAdd, setItemAdd] = useState({item: "placeholder"});
    let [editMode, setEditMode] = useState(false);
    let [textValue, setTextValue] = useState("");
    let [value, setValue] = useState({});
    const test = () => {
        return JSON.stringify(itemAdd)
    }
    const result = test()
    return (<div>
        {result}
        {editMode &&
            <span>
                {textValue}
                <button onClick={deactivateEditMode}>Изменить</button>
            </span>
        }
        {!editMode &&
            <div>
                <input placeholder="Введите задачу" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                <button onClick={activateEditMode}>Сохранить</button>
            </div>
        }
        <div>
            <button onClick={event => Object.assign(itemAdd, testValue)}>+</button>
        </div>
    </div>)
}

export default Item