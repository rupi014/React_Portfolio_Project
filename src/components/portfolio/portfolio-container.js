import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";  


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                { tittle: "Quip" }, 
                { tittle: "Eventbrite" },
                { tittle: "Ministry Safe" },
                { tittle: "SwingAway" }
            ]
        };
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.tittle} url={"google.com"}/>
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}