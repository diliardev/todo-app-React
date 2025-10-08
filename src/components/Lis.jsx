import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"



class Lis extends React.Component {
    render() {
        const { lis } = this.props
        return(
                <div className="lis" >
                <IoCloseCircleSharp onClick={() => this.props.onDelete(lis.id)} className="delete-icon" />  
                <h3>{lis.firstname}</h3>
                <p>{lis.purchases}</p>
                </div>
        )
    }
}

export default Lis