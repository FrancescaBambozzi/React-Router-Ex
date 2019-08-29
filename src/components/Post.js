import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null //when comp first load
    }
    componentDidMount(){
        let id = this.props.match.params.post_id; //match the Route Parameter with post_id that I gave in App.js
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
         //then, update the state through .then() method
         .then(res => {
             this.setState({
                 post: res.data
             })
         })
    }
    render(){
        //to check if the post with that ID exist
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post..</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }

}

export default Post