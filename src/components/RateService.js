import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeh, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons';

export default class RateService extends React.Component {
    getPercentage = event => {
        const newPercentage = parseInt(event.target.parentNode.parentNode.id);
        this.props.handleRateService(newPercentage);
    }

    componentDidUpdate = () => {
        const allSmileys = document.querySelectorAll('.star-icon');
        allSmileys.forEach(smiley => {
            if (smiley.classList.contains('clicked')) {
                smiley.classList.remove('clicked');
            }
        });

        const clickedSmiley = document.getElementById(this.props.clickedPercentage).children[0];
        clickedSmiley.classList.add('clicked');
    }

    render() {
        return(
            <div className="rate-service">
                <h2 className="regular-text">Rate the service:</h2>
                <div id={this.props.percentages[0]} onClick={this.getPercentage}>
                    <FontAwesomeIcon 
                        icon={faFrown} 
                        className="star-icon star-icon--red"
                    />
                </div>
                <div id={this.props.percentages[1]} onClick={this.getPercentage}>
                    <FontAwesomeIcon  
                        icon={faMeh} 
                        className="star-icon star-icon--yellow" 
                    />
                </div>
                <div id={this.props.percentages[2]} onClick={this.getPercentage}>
                    <FontAwesomeIcon 
                        icon={faSmile} 
                        className="star-icon star-icon--green" 
                    />
                </div>
            </div>
        );
    }
}
