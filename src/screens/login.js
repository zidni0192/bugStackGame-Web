import React, { Component } from 'react'
import {connect} from 'react-redux'
class login extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapState=(state)=>{
    return {
        user:state.user
    }
}
export default connect(mapState)(login)
