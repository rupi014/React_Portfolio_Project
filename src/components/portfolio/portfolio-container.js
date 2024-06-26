import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";  
import axios from 'axios';


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);   
        this.getPortfolioItems = this.getPortfolioItems.bind(this);

    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} title={item.name} url={item.url} slug={item.id}/>
        })
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => item.category === filter)
        })  
    }

    getPortfolioItems() {
        axios
        .get("https://rubensballester.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          this.setState({
            data: response.data.portfolio_items
        })
      })
        .catch(error => {
          console.log(error);
        })
      };

    componentDidMount() {
      this.getPortfolioItems();
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