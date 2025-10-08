import React from "react"
import Lis from './Lis'


class List extends React.Component {



    render() {
        const items = Array.isArray(this.props.list) ? this.props.list : []
        if (items.length > 0) {
            return (
                <div className="list">
                    {items.map((el) => (
                        <Lis onDelete={this.props.onDelete} key={el.id} lis={el} />
                    ))}
                </div>
            )
        } else {
            return (
                <div className="list">
                    <h3>The list is empty</h3>
                </div>
            )
        }
    }
}

export default List