import React from "react"

class AddList extends React.Component {
   constructor(props) {
        super(props)
  this.state = {
    firstname: "",
    purchases: "",

  }
   }
    render() {
        return(
        <form ref= {(el)=> this.myForm = el}>
          <input placeholder="Сategory" onChange={(e) => this.setState({firstname: e.target.value})} />
          <textarea placeholder="Purchases" onChange={(e) => this.setState({purchases: e.target.value})}></textarea>
          <button type="button" onClick={()=> {
            this.myForm.reset()
            this.props.onAdd({
            firstname: this.state.firstname,
            purchases: this.state.purchases,

          })}
          }>Append</button>
          
        </form>
        )
    }
}

export default AddList