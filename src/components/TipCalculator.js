import React from 'react';
import Header from './Header';
import RateService from './RateService';
import Form from './Form';
import TipModal from './TipModal';


export default class TipCalculator extends React.Component {
    state = {
        clickedPercentage: 0,
        percentages: [10, 20, 30],
        bill: 0,
        tip: 0,
        people: 1,
        roundUp: false,
        totalBill: undefined,
        splitBill: undefined,
        validForm: false
    }

    handleRateService = newPercentage => {
        this.setState(() => ({ clickedPercentage: newPercentage }));

        if (this.state.bill > 0) {
            this.setState(() => ({ validForm: true }));
        }
    }

    handleBill = bill => {        
        this.setState(() => ({ bill: bill }));

        if (this.state.clickedPercentage > 0) {
            this.setState(() => ({ validForm: true }));
        }
    }

    handlePeople = people => {
        this.setState(() => ({ people: people }));
    }

    handleRoundUp = () => {
        this.setState(prevState => ({ roundUp: !prevState.roundUp}));
       
    }

    handleClearTotalBill = () => {
        this.setState(() => ({ totalBill: undefined }));
    }

    handleReset = () => {
        this.setState(() => ({
            clickedPercentage: 0,
            bill: 0,
            tip: 0,
            people: 1,
            roundUp: false,
            totalBill: undefined,
            splitBill: undefined,
            validForm: false
        }));
        window.location.reload();
    }

    calculateTip = event => {
        event.preventDefault();
        

        const percentage = this.state.clickedPercentage / 100;
        const bill = this.state.bill;
        const tip = parseInt((bill * percentage).toFixed(2));
        const people = this.state.people;
        const roundUp = this.state.roundUp;
        let totalBill;
        
        // If Round Up is true, round the total bill up or down to the next 10
        if (roundUp) {
            totalBill = Math.round((bill + tip) / 10) * 10;
        } else {
            totalBill = bill + tip;
        }
        
        // If there is more than 1 person, split the bill equally
        const splitBill = people > 1 ? (totalBill / people) : undefined;
        
        this.setState(() => (
            { 
                tip: tip,
                totalBill: totalBill,
                splitBill: splitBill
            }
        ));
    }

    render() {
        return(
            <div className="tip-calculator container">
                <Header />
                <RateService 
                    handleRateService={this.handleRateService} 
                    clickedPercentage={this.state.clickedPercentage}
                    percentages={this.state.percentages} 
                />
                <Form 
                    handleBill={this.handleBill}
                    handlePeople={this.handlePeople} 
                    handleRoundUp={this.handleRoundUp}
                    handleReset={this.handleReset}
                    roundUp={this.state.roundUp}
                    calculateTip={this.calculateTip}
                    validForm={this.state.validForm} 
                />
                <TipModal 
                    bill={this.state.bill} 
                    percentage={this.state.clickedPercentage} 
                    tip={this.state.tip}
                    roundUp={this.state.roundUp}
                    totalBill={this.state.totalBill}
                    splitBill={this.state.splitBill}
                    handleClearTotalBill={this.handleClearTotalBill}
                />
            </div>
        );
    }
}