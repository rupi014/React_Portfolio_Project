import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return ( 
    <div>
      <h2>Blog</h2>

    <div>
        <Link to="/about-me">Read More About Myself</Link>
    </div>
    </div>
  );
}