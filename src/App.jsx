import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Axios from 'axios';

class App extends Component {
  state = {
    data: [],
    totalPrice: 0,
    numbers: [],
    prices: [],
    total: []
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    Axios.get('https://5d2c52dc8c90070014972423.mockapi.io/api/testinfo/data')
    .then(res => {
      let numbers = [];
      let prices = [];
      let total = [];
      res.data.map(el => {numbers.push(el.number)
        prices.push(el.price)
        total.push(el.number * el.price)
      })
      let totalPrice = total.reduce((acc, value) => acc + value, 0)
      this.setState({
        data: res.data,
        numbers: numbers,
        prices: prices,
        total: total,
        totalPrice: totalPrice
      })

    })
  }
  funcInc = (e) => {
    let num = this.state.numbers;
    let tot = this.state.total;
    let prices = this.state.prices;
    num[e.target.id - 1]++;
    this.setState({
      numbers: num
    })
    tot[e.target.id - 1] = prices[e.target.id - 1] * num[e.target.id - 1];
    this.funcTotalPrice()
  }

  funcDec = (e) => {
    let num = this.state.numbers;
    let tot = this.state.total;
    let prices = this.state.prices;
    if(num[e.target.id - 1] > 1){
      num[e.target.id - 1]--;
    }
    this.setState({
      numbers: num
    })
    tot[e.target.id - 1] = prices[e.target.id - 1] * num[e.target.id - 1];
    this.funcTotalPrice()
  }
  
  funcTotalPrice = () => {
    let sum = this.state.total.reduce((acc, value) => acc + value, 0);
    this.setState({
      totalPrice: sum
    })
  }

  funcDelet = (e) => {
    let id = e.target.id;
    let num = this.state.numbers;
    let tot = this.state.total;
    let prices = this.state.prices;
    num.splice(id - 1, 1);
    tot.splice(id - 1, 1);
    prices.splice(id - 1, 1)
    this.setState({
      data: this.state.data.filter(el => el.id !== id),
      numbers: num,
      prices: prices,
      total: tot
    })
    this.funcTotalPrice()
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main data={this.state.data} totalPrice={this.state.totalPrice} funcDec={this.funcDec} funcInc={this.funcInc} total={this.state.total} numbers={this.state.numbers} funcDelet={this.funcDelet}/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
