import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "../../data.json";

// FIXME: // See activity 29-Stu_FriendRefactor/Solved

class Game extends Component {
  state = {
    data,
    currentScore: 0,
    topScore: 0
   
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleCorrectGuess = newData => {
   

    // get current score and add 1 to it
    const currentScore = this.state.currentScore + 1;
console.log(currentScore)
    let topScore = this.state.topScore;
console.log(topScore)
    // check if current score is greater than topScore
    if (currentScore > topScore) {
      topScore = currentScore;
    }

    this.setState({
      data: this.shuffleData(newData),
      currentScore: currentScore,
      topScore: topScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      currentScore: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleItemClick = id => {
     console.log("this is clicked")
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
<Container>
      
        <Nav topScore={this.state.topScore} currentScore={this.state.currentScore}/>

        
        <Header></Header>
      
      
        {/* {/* {this.state.data.map(card => {
          return (
            <div className="col-12 col-sm-3 col-md-2" key={card.id}>
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid img-thumbnail rounded"
                onClick={() => this.handleItemClick(item.id)}
              /
            


          );

        })


        } */}
        {this.state.data.map(item =>
          
          
        <ClickItem
        handleItemClick={this.handleItemClick}
        id={item.id}
        key={item.id}
        image={item.image}
        clicked={item.clicked}
        // onClick={() => this.handleItemClick(item.id)}



        />


        //        <img
        //         src={item.image}
        //         alt={item.name}
        //         className="img-fluid img-thumbnail rounded"
        //         onClick={() => this.handleItemClick(item.id)}></img>

       
        // </ClickItem>
        )}
      <Footer></Footer>
      </Container>

            
        //   </div >
          
        // </div >

          


    )
  };
}



export default Game;
