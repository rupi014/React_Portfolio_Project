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

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem 
            key={item.id} 
            item={item} 
            />  
        })
    }


    componentDidMount() {
      this.getPortfolioItems();
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        return (
            
            <div className="portfolio-items-wrapper">

            <button className="btn" onClick={() => this.handleFilter("Technology")}>Technology</button>
            <button className="btn" onClick={() => this.handleFilter("Education")}>Education</button>
            <button className="btn" onClick={() => this.handleFilter("Shopping")}>Shopping</button>

            {this.portfolioItems()}
            </div>

        
        )
    }
}