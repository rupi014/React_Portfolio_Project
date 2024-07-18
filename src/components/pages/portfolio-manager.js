import React, { Component } from 'react';
import axios from 'axios';
import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: []
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleErrorFormSubmission = this.handleErrorFormSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(portfolioItem) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
    { withCredentials: true 
    }).then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          })
        })
      })
      .catch(error => {
        console.log("error in portfolio items", error);
      });
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
    });
  }

  handleErrorFormSubmission(error) {
    console.log("error from form submission", error);
  }

  getPortfolioItems() {
    axios.get('https://rubensballester.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc',
    { withCredentials: true 
    }).then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in portfolio items", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return ( 
      <div className='portfolio-manager-wrapper'>
        <div className='left-column'>
            <PortfolioForm
              handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
              handleErrorFormSubmission={this.handleErrorFormSubmission}
            />
        </div>

        <div className='right-column'>
            <PortfolioSidebarList 
            data={this.state.portfolioItems}
            handleDeleteClick={this.handleDeleteClick}
            />
        </div> 
    
      </div>
    )
  }
}