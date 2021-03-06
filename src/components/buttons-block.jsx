import React from 'react';
import '../scss/remove-add-buttons-block.scss'
import Button from "./button";
import {useSelector, useDispatch} from 'react-redux';
import {setAddMode, removeSelectedNode, resetSelect} from "../redux/toolkitSlice";

function RemoveAddButtonsBlock() {
    const selectedNode = useSelector(({ui}) => ui.selectedNode);
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        if (selectedNode.parent_id !== null) {
            dispatch(removeSelectedNode(selectedNode.id));
            dispatch(resetSelect());
        }
    }

    const handleAdd = (event) => {
        if (selectedNode.id) {
            dispatch(setAddMode(true));
        }
    }

    return (
        <div className="remove-add-buttons-block">
            <Button onClick={handleAdd} buttonText="Добавить"/>
            <Button onClick={handleDelete} className={selectedNode.parent_id === null ? "inactive" : ""} buttonText="Удалить"/>
        </div>
    );
}

export default RemoveAddButtonsBlock;