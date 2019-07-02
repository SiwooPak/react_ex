import React, { Component } from 'react' ;

class Counter extends Component {
  state = {
    number : 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.count]: e.target.value
    });
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      number: 0
    })
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  handleCounterDefine = () => {

  }

  render() {
    return(
      <div>
        <h1>Counter</h1>
        <p name="printCount">Count: {this.state.number}</p>
        <button onClick={this.handleIncrease}>Increment</button>
        <button onClick={this.handleDecrease}>Decrement</button><br></br>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Count"
            value={this.state.number}
            onChange={this.handleChange}
            name="count"
          />
          <button type="submit">Set Count</button>
        </form>
        <p className="error">{this.props.error}</p>
      </div>
    );
  }
}

export default Counter;
