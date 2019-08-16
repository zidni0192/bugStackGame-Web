import React, { Component } from 'react'

class home extends Component {
    render() {
        return (
            <div>
                <div style={{ marginLeft: "50%", transform: "translateX(-50%)"}}>
                    <h1>Welcome {localStorage.username}</h1>
                </div>
            </div>
        )
    }
}

export default home