import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getByEmail } from '../publics/redux/action/user';
class Login extends Component {
    login = async (e) => {
        e.preventDefault()
            await this.props.dispatch(getByEmail({
                username: document.getElementById('email').value,
                password: document.getElementById('password').value
            }))
            if (this.props.user.userList === 'Password Salah') {
                alert('Password Salah')
            } else if (this.props.user.userList === "Email Tidak Terdaftar") {
                alert('Email Tidak Terdaftar')
            } else {
                alert('Sukses Login')
                window.location.href = '/'
            }
    }
    render() {
        if (localStorage.token) {
            return window.location.href = '/'
        } else {
            return (
                <div>
                    <div style={{ marginBottom: 100, borderRadius: 5, width: 500, marginLeft: "50%", transform: "translateX(-50%)", overflow: "hidden", boxShadow: "0.5px 0.5px 2px #ddd", paddingBottom: 20 }}>
                        <div style={{ padding: "10px 40px", width: "100%", boxSizing: "border-box", boxShadow: "0.5px 0.5px 2px #ddd" }}>
                            <h2>Login</h2>
                        </div>
                        <div style={{ padding: "10px 40px", width: "100%", overflow: "hidden", boxSizing: "border-box", boxShadow: "0px 0px 0.1px #ddd" }}>
                            <form onSubmit={this.login}>
                                <div>
                                    <p>Email / Username</p>
                                    <input autocomplete="off" type={'text'} style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} id={'email'} required />
                                </div>
                                <div>
                                    <p>Password</p>
                                    <input type={'password'} style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} id={'password'} required />
                                </div>
                                <div>
                                    <p></p>
                                    <button id={'login'} style={{ padding: 15, width: "100%", borderRadius: '5px', border: "0px", backgroundColor: "#24f555", color: "white", fontSize: "15pt", cursor: "pointer" }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

}
const mapState = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapState)(Login)
