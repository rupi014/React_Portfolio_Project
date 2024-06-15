import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";  


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rended")
    }

    render() {
        return (
            <div>
                <h2>Portfolio Items go here...</h2>
                <PortfolioItem  />
            </div>
        )
    }
}