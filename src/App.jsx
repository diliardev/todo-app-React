import React from 'react'
import Header from "./components/Header"
import List from './components/List'
import AddList from './components/AddList'




class App extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
                list: [
        {
            id:1,
            firstname:"Produkts",
            purchases: "Apple,banana,sweets "
        },
        {
            id:2,
            firstname:"Technic",
            purchases: "Keyboard,mouse,sweets "
        }
    ]
        }
        this.AddList = this.AddList.bind(this)
        this.deleteList=this.deleteList.bind(this)

    }
    render() {
        return(<div>

            <Header title='Shopping list' />
            <main class="haupt">
                <List list={this.state.list} onDelete={this.deleteList}/>

            </main>
            <aside class="neben">
            <AddList onAdd={this.AddList}/>
            </aside> 
        </div>)
    }

    AddList(list) {
        const id = this.state.list.length +1
        this.setState({list: [...this.state.list,{id, ...list}]})
    }
    deleteList(id) {
        this.setState({
            list: this.state.list.filter((el) => el.id !== id)
        })

    }
}

export default App
