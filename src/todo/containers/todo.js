import React, { Component } from 'react';
import TodoPage from '../pages/todo';

class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            newItemText: '',
        }

        this.onNewItem = this.onNewItem.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onChangeNewItemText = this.onChangeNewItemText.bind(this);
        this.onExitEditMode = this.onExitEditMode.bind(this);
        this.onEnterEditMode = this.onEnterEditMode.bind(this);
        this.onChangeChecked = this.onChangeChecked.bind(this);
        
    }

    onNewItem(){
        console.log('onNewItem');
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: Date.now(),
                    isEditing: true,
                    isChecked: false,
                    text: 'hola mundo',
                }
            ]
        })
    }

    onRemoveItem(item){
        console.log('onRemoveItem');
        const { items } = this.state;
        const index = items.findIndex(i => i.id === item.id);
        if (index === -1 ) return;
        const newItems = items.slice();
        newItems.splice(index, 1);
        this.setState({ items: newItems });
    }

    onChangeNewItemText(e){
        this.setState({ newItemText: e.target.value}, console.log(this.state.newItemText));
    }

    onExitEditMode(item){
        console.log('onExitEditMode');
        const { items, newItemText } = this.state;
        this.setState({
            newItemText: '',
            items: items.map(next => 
                {
                    if(next.id === item.id) {
                        return {
                            ...next,
                            isEditing: false,
                            text: newItemText
                        }
                    } 
                    return next;
                })
        }, console.log(this.state))
    }

    onEnterEditMode(item){
        console.log('onEnterEditMode');
        this.setState({
            newItemText: item.text,
            items: this.state.items.map(next => 
                {
                    if(next.id === item.id) {
                        return {
                            ...next,
                            isEditing: true,
                        }
                    } 
                    return next;
                })
        }, console.log(this.state))
    }

    onChangeChecked(item){
        console.log('onChangeChecked');
        this.setState({
            items: this.state.items.map(next => 
                {
                    if(next.id === item.id) {
                        return {
                            ...next,
                            isChecked: !item.isChecked,
                        }
                    } 
                    return next;
                })
        })
    }

    render(){

        const { newItemText, items} = this.state;

        return(
            <div>
                <TodoPage 
                    items={items} 
                    onNewItem={this.onNewItem} 
                    onRemoveItem={this.onRemoveItem}
                    newItemText={newItemText}
                    onChangeNewItemText={this.onChangeNewItemText}
                    onExitEditMode={this.onExitEditMode}
                    onEnterEditMode={this.onEnterEditMode}
                    onChangeChecked={this.onChangeChecked}/> 
            </div>
        )
    }
    
}

export default Todo;