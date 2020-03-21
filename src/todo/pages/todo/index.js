import React from 'react';
import Nav from '../../../layout/Nav';
import { Card, H2, Divider, UL, Button, Checkbox, Label, InputGroup, Intent, Callout } from '@blueprintjs/core';
import NavbarPage from '../../components/layout/index';
import './style.css';

const TodoPage = (props) => {

    const { 
        items, 
        onNewItem, 
        onRemoveItem, 
        newItemText, 
        onChangeNewItemText,
        onExitEditMode,
        onEnterEditMode,
        onChangeChecked,
    } = props;

    return(
        <div>
            {/* <Nav/> */}
            <NavbarPage>
                <Card>
                    <H2>TODO</H2>
                    <Button 
                        text="new item"
                        intent={Intent.PRIMARY}
                        icon="new-object"
                        className="new-todo-item"
                        onClick={onNewItem}
                    />
                    <Callout intent={Intent.DANGER}>
                        error
                    </Callout>
                    <Divider />
                    <UL className="todo-list">
                        { items.map(item => 
                            <li 
                                className="todo-item"
                                key={item.id}>
                                <Button
                                    small
                                    icon="remove"
                                    intent="danger"
                                    className="todo-item-action"
                                    onClick={() => onRemoveItem(item)}
                                />    
                                {item.isEditing ? 
                                    <InputGroup
                                        small
                                        className="todo-item-text-edit"
                                        placeholder="item text..."
                                        value={newItemText} 
                                        onChange={onChangeNewItemText}
                                        onBlur={() => onExitEditMode(item)}
                                        inputRef={ref => ref && ref.focus()}
                                    />
                                    :
                                    <div>
                                        <Checkbox
                                            className="todo-item-label"
                                            checked={item.isChecked}
                                            onChange={()=> onChangeChecked(item)}
                                        />
                                        <Label 
                                            className={`todo-item-label ${item.isChecked ? 'done': ''}`}
                                            onClick={() => onEnterEditMode(item)}
                                        >
                                            {item.text}
                                        </Label>
                                    </div>
                                }
                            </li>
                        )}
                    </UL>
                </Card>
            </NavbarPage>
        </div>
    )
}

export default TodoPage;