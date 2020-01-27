import React from 'react';

export default class Form extends React.Component { 
    handleBill = event => {
        event.preventDefault();
        const bill = parseInt(event.target.value);
        if(bill) {
            this.props.handleBill(bill);
        }
    }

    handlePeople = event => {
        event.preventDefault();
        const people = parseInt(event.target.value);
        if(people) {
            this.props.handlePeople(people);
        }
    }

    addClickedClass = () => {
        if (this.props.roundUp) {
            return "button button--yellow clicked";
        }

        return "button button--yellow";
    }
    
    render() {
        return(
            <form onSubmit={e => this.props.calculateTip(e)} className="form">
                <div className="form-group">
                    <p className="regular-text">
                        Your Bill:
                    </p>
                    <div className="form-input">
                        <input 
                            onChange={this.handleBill} 
                            className="form-input-value" 
                            name="bill" 
                            type="number"
                            step="1" 
                            min="10" 
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <p className="regular-text">
                        People:
                    </p>
                    <div className="form-input">
                        <input 
                            onChange={this.handlePeople} 
                            className="form-input-value" 
                            name="people" 
                            type="number" 
                            min="1" 
                            defaultValue="1" 
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <p className="regular-text">
                        Round?
                    </p>
                    <div className="form-input">
                        <button 
                            onClick={this.props.handleRoundUp} 
                            type="button"
                            className={"button button--yellow" + (this.props.roundUp ? " clicked" : "")}>
                                {this.props.roundUp ? 'Yes' : 'No'} 
                        </button>
                    </div>
                </div>
                <button disabled={!this.props.validForm} type="submit" className="big-button">
                    CALCULATE
                </button>
                <button onClick={this.props.handleReset} className="reset-button">
                    Reset
                </button>
            </form>
        );
    }
}