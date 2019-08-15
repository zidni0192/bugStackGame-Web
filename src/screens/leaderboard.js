import React, { Component } from 'react'
import {connect} from 'react-redux'
class leaderboard extends Component {
    render() {
        return (
            <div>
                asdads
            </div>
        )
    }
}
const mapState=(state)=>{
    return {
        pattern:state.pattern
    }
}
export default  connect(mapState)(leaderboard)