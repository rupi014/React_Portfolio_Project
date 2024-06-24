import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";  


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                { tittle: "Quip", category: "eCommerce" },
                { tittle: "Eventbrite", category: "Scheduling" },
                { tittle: "Ministry Safe", category: "EnterPrise" },
                { tittle: "SwingAway", category: "eCommerce" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);   

    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.tittle} url={"google.com"}/>
        })
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => item.category === filter)
        })  
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
                <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
                <button onClick={() => this.handleFilter("EnterPrise")}>EnterPrise</button>

                {this.portfolioItems()}

            </div>
        )
    }
}