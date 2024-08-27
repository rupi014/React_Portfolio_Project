import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default class RichTextEditor extends Component {
    constructor() {
        super();

        this.state = {
            editorState: EditorState.createEmpty()
        }

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.setState({ editorState}, this.props.handleRichTextEditorChange(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))));
    }


    render() {
        return ( 
            <div className='rich-text-editor'>
                <Editor
                editorState={this.state.editorState}
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
                onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}