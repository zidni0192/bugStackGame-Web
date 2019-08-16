import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScore } from '../publics/redux/action/score'
class leaderboard extends Component {
    state = {
        data: []
    }
    componentDidMount = async () => {
        await this.props.dispatch(getScore())
        this.setState({ data: this.props.score.scoreList })
    }
    render() {
        return (
            <div>
                <table style={{width:'60%',marginLeft:'50%',transform:'translateX(-50%)'}}>
                    <tr style={{backgroundColor:'#ddd'}}>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Skor</th>
                    </tr>
                    {this.state.data.map((item, key) => {
                        if(key %2 === 0){
                            return (
                                <tr style={{textAlign:'center'}}>
                                    <td>{key + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.score}</td>
                                </tr>
                            )    
                        }else{
                            return (
                                <tr style={{textAlign:'center',backgroundColor:'#ddd'}}>
                                    <td>{key + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.score}</td>
                                </tr>
                            )    
                        }
                    })}
                </table>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        score: state.score
    }
}
export default connect(mapState)(leaderboard)