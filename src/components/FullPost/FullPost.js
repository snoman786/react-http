import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost : null 
    }
    componentDidUpdate() {
        if (this.props.id) {
            // trying to stop infinte loop
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
            axios.get("/posts/" + this.props.id).then(
                response => {
                    console.log(response);
                    this.setState({ loadedPost: response.data })
                });
        }
    }

    deleteHandler = () => {
        axios.delete("/posts/" + this.props.id).then(response => {
            console.log(response);
        })
    }
    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p style={{ textAlign: "center" }}>Loading ... </p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        
        return post;
    }
}

export default FullPost;