import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import BlogItem from "../blog/blog-item";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: []
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
      axios.get("https://rubensballester.devcamp.space/portfolio/portfolio_blogs",
        { withCredentials: true }
      ).then(response => {
        this.setState({
          blogItems: response.data.portfolio_blogs
        })
      }).catch(error => {
        console.log("error in getBlogItems", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    const blogrecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />
    });
    
    return ( 
      <div className='blog-container'>
        <div className='content-container'>{blogrecords}</div>
      </div>
    );
  }
}

export default Blog;