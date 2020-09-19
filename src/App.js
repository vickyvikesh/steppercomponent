import React, { Component } from 'react';
import './App.scss';
import Stepper from "./stepper/Stepper"




class App extends Component {
  constructor() {
    super()
    this.state = {
      currentStep: 1
    }
  }
  // handleClick = (clickType) => {
  //   const { currentStep } = this.state;
  //   let newStep = currentStep;
  //   clickType === "next" ? newStep++ : newStep--;

  //   if (newStep > 0 && newStep <= 5) {

  //     this.setState({
  //       currentStep: newStep
  //     });
  //   }
  // }
  render() {
    const stepsArray = [
      {
        name: "Create an appilication",
        value: "create"
      },
      {
        name: "Add personal data",
        value: "adddata",
      },
      {
        name: "Add payment",
        value: "addpayment",
      },
      {
        name: "Submit application",
        value: "Submit"
      }
    ]
    const { currentStep } = this.state
    return (
      <>
        {/* <div className="stepper-container-vertical">
          <Stepper
            direction="vertical"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="#ee5253"
          />
        </div> */}

        <div className="stepper-container-horizontal">
          <Stepper
            direction="horizontal"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="green"
          />

          {/* <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div> */}
        </div>

        {/* <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div> */}
      </>
    )
  }




}

export default App;
