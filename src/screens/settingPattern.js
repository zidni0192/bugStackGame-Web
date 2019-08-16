import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPattern, patchPattern } from '../publics/redux/action/pattern'
class settingPattern extends Component {
    state = {
        pattern: '',
        score : 0,
        idPattern :0,
    }
    componentDidMount = async () => {
        await this.props.dispatch(getPattern())
        this.setState({ pattern: this.props.pattern.patternList[0].pattern, score:this.props.pattern.patternList[0].score,idPattern:this.props.pattern.patternList[0].idPattern})
    }
    simpan = (e)=>{
        e.preventDefault()
        this.props.dispatch(patchPattern({idPattern:this.state.idPattern,score:this.state.score,pattern:this.state.pattern}))

    }
    render() {
        console.log(this.state.pattern);
        return (
            <div>
                <div style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>
                    <div style={{ padding: "10px 40px", width: "100%", overflow: "hidden", boxSizing: "border-box" }}>
                        <form onSubmit={this.simpan}>
                            <div>
                                <p>Pattern</p>
                                <input type={'text'} style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} value={this.state.pattern && this.state.pattern} onChange={(e)=>this.setState({pattern:e.currentTarget.value})} id={'pattern'} required />
                            </div>
                            <div>
                                <p>Score</p>
                                <input type={'text'} style={{ padding: "10px 20px", fontSize: "10pt", borderRadius: 5, border: "1px solid #ddd", width: "100%", boxSizing: "border-box" }} value={this.state.score && this.state.score} id={'score'} onChange={(e)=>this.setState({score:e.currentTarget.value})} required />
                            </div>
                            <div>
                                <p></p>
                                <button id={'login'} style={{ padding: 15, width: "100%", borderRadius: '5px', border: "0px", backgroundColor: "#24f555", color: "white", fontSize: "15pt", cursor: "pointer" }}>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        pattern: state.pattern
    }
}

export default connect(mapState)(settingPattern)