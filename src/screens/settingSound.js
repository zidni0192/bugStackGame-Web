import React, { Component } from 'react'
import {connect} from 'react-redux'
class settingSound extends Component {
    render() {
        return (
            <div>
                settingSound
            </div>
        )
    }
}

const mapState=(state)=>{
    return {
        sound:state.sound
    }
}

export default connect(mapState)(settingSound)