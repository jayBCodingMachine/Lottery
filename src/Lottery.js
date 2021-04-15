import React, { Component } from 'react'
import Ball from './Ball'
import "./Lottery.css"


class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {nums: Array.from({length: this.props.maxBalls})};
        this.handleCLick = this.handleCLick.bind(this)
    }
    generate () {
        this.setState(curState => ({
            nums: curState.nums.map(n =>  Math.floor(Math.random() * this.props.maxNum) +1 )
            
        }))
    }
    

    handleCLick(){
        this.generate();
    }


    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                   { this.state.nums.map(number => <Ball num={number} /> )}
                </div>
                <button onClick={this.handleCLick} > Generate </button>
            </section>
        )
    }
}

export default Lottery;