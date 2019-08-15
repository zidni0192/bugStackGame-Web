import React, { Component } from 'react'
import {connect} from 'react-redux'
class settingPattern extends Component {
    render() {
        return (
            <div>
                Setting pattern
            </div>
        )
    }
}

const mapState=(state)=>{
    return {
        pattern:state.pattern
    }
}

export default connect(mapState)(settingPattern)