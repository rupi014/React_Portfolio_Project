import React, { Component } from 'react';
import axios from 'axios';
import RichTextEditor from "../forms/rich-text-edior";

export default class BlogForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            title: "",
            blog_status: "",
            content: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }

    handleRichTextEditorChange(content) {
        this.setState({ content});
    }

    buildForm() {
        let formData = new FormData();

        formData.append('portfolio_blog[title]', this.state.title);
        formData.append('portfolio_blog[blog_status]', this.state.blog_status);
        formData.append('portfolio_blog[content]', this.state.content);

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        axios.post(
            "https://rubensballester.devcamp.space/portfolio/portfolio_blogs", 
            this.buildForm(), 
            { withCredentials: true } 
        ).then(response => {
            this.setState({
                title: "",
                blog_status: "",
                content: ""
            });
            this.props.hanleSuccessfullFormSubmission(response.data.portfolio_blog);    

        }).catch(error => {
            console.log("handle submit error", error);
        });

        event.preventDefault();
    }

    render() {
        return ( 
            <form onSubmit={this.handleSubmit} className='blog-form-wrapper'>
                
                <div className='two-column'>

                <input
                onChange={this.handleChange} 
                type="text"
                name="title"
                placeholder='Blog Title'
                value={this.state.title}
                />

                <input 
                type="text"
                onChange={this.handleChange} 
                name="blog_status"
                placeholder='Blog Status'
                value={this.state.blog_status}
                />

                </div>

                <div className='one-column'>
                    <RichTextEditor 
                        handleRichTextEditorChange={this.handleRichTextEditorChange}
                    />
                </div>

                <button className='btn'>Save</button>

            </form>
        )
    }
}