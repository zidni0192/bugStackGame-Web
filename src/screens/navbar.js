import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class navbar extends Component {
    render() {
        return (
            <div style={{ marginBottom: 100, overflow: 'hidden' }}>
                <div style={{ height: 80, position: "fixed", boxShadow: '0px 0px 4px #ddd', width: '100%' }}>
                    <div style={{ float: 'left', fontSize: '20pt', fontWeight: 'bold', marginTop: 20, marginLeft: 30 }}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Bug Stack</Link>
                    </div>
                    <div style={{ float: 'right', marginTop: 30, marginRight: 30 }}>
                        {localStorage.token && localStorage.token !== '' ?
                            <>
                                <Link to='/settingPattern' style={{ textDecoration: 'none', color: 'black', fontSize: '10pt', margin: '0px 10px' }}>Settung Pattern</Link>
                                <Link to='/settingSound' style={{ textDecoration: 'none', color: 'black', fontSize: '10pt', margin: '0px 10px' }}>Setting Sound</Link>
                                <Link to='/leaderboard' style={{ textDecoration: 'none', color: 'black', fontSize: '10pt', margin: '0px 10px' }}>Leaderboard</Link>
                                <Link to='/login' style={{ textDecoration: 'none', color: 'black', fontSize: '10pt', margin: '0px 10px' }} onClick={() => localStorage.clear()}>Logout</Link>
                            </>
                            :
                            <Link to='/login' style={{ textDecoration: 'none', color: 'black', fontSize: '10pt', margin: '0px 10px' }}>Login</Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
