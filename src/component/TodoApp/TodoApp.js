import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {

    state = {
        input : "",
        items:[]
    }

handleChange = (event) =>{
    this.setState({
        input : event.target.value
    })
}

storeItems = (event)=>{
    event.preventDefault()
    const {input} = this.state
  
    this.setState({
        items: [...this.state.items, input],
        input: ""
    })
}

deleteItem = (index)=>{
    const allItems = this.state.items
    allItems.splice(index,1);
    this.setState({
        items: allItems
    })
}

editItem = (index)=>{
    const allItems = this.state.items
    const editValue = prompt('Edit item')
    this.state.items[index] = editValue
    this.setState({
        items: allItems
    })
}

  render() {

    const {input, items} = this.state
    console.log(items);
    
    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}>
        <h1>My tasks</h1>
            <input type="text" onChange={this.handleChange} value={input} placeholder='Enter Items...'/>
        </form>

        <ul>
            {
                items.map((data,index)=>(
                    <li key={index}><b>{data} </b><i onClick={()=>this.deleteItem(index)} className="fa-solid fa-trash-can"></i><i onClick={()=>this.editItem(index)} className="fa-solid fa-pencil"></i></li>
                ))
            }
        </ul>

      </div>

    )
  }
}
