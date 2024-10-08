import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll, false);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this); 
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfullNewBlogSubmission = this.handleSuccessfullNewBlogSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(blog) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
      { withCredentials: true }
    ).then(response => {
      this.setState({
        blogItems: this.state.blogItems.filter(blogItem => {
           return blogItem.id !== blog.id})
      })
    }).catch(error => {
      console.log("error in delete blog", error);
    });
  }

  handleSuccessfullNewBlogSubmission(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems)    
    });
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true
    });
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false
    });
  }

  onScroll() {
    
      if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
        return;
      }

      if (
        window.innerHeight + Math.ceil(document.documentElement.scrollTop) === document.documentElement.offsetHeight
      ) {
        this.getBlogItems();
      }
    }
    
  

  getBlogItems() {

      this.setState({
          currentPage: this.state.currentPage + 1
      });

      axios.get(`https://rubensballester.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
        { withCredentials: true }
      ).then(response => {
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false
        })
      }).catch(error => {
        console.log("error in getBlogItems", error);
      });
  }

  UNSAFE_componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  render() {
    const blogrecords = this.state.blogItems.map(blogItem => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return (
          <div className='admin-blog-wrapper' key={blogItem.id}>
            <BlogItem blogItem={blogItem}/>
            <a onClick={() => this.handleDeleteClick(blogItem)}>
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        )
      }else {
      return <BlogItem key={blogItem.id} blogItem={blogItem}/>
      }
    });
    
    return ( 
      <div className='blog-container'>
        <BlogModal 
        handleSuccessfullNewBlogSubmission={this.handleSuccessfullNewBlogSubmission}
        modalIsOpen={this.state.blogModalIsOpen}
        handleModalClose={this.handleModalClose} 
        />


        {this.props.loggedInStatus === "LOGGED_IN" ? 
        <div className='new-blog-link'>
          <a onClick={this.handleNewBlogClick}>
            <FontAwesomeIcon icon="plus-circle" />
          </a>
        </div>
        :null}
        
        <div className='content-container'>{blogrecords}</div>

        {this.state.isLoading ? (
          <div className='content-loader'> 
          <FontAwesomeIcon icon="spinner" spin />
          </div>) : null}

      </div>
    );
  }
}

export default Blog;