import React, { Component } from 'react';
import { connect } from 'react-redux'
import deletePost from '../actions/postActions'
//import axios from 'axios'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id); //calling the action
        this.props.history.push('/home'); //to redirect to Home page once the action has completed
    }
    render(){
        console.log(this.props)
        //to check if the post with that ID exist
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
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

const mapStateToProps = (state, ownProps) => { //map the state to the component
    let id = ownProps.match.params.post_id //to grab only the post with that ID (the name is given in App.js when defining the Route)
    return {
        post: state.posts.find(post => post.id == id)
    }

}

const mapDispatchToProps = (dispatch) => { //to send the action (change) to the central store
    return {
        deletePost: (id) => { dispatch(deletePost(id))} //define the action
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

//to fetch dummy data 
    // state = {
    //     post: null //when comp first load
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id; //match the Route Parameter with post_id that I gave in App.js
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //      //then, update the state through .then() method
    //      .then(res => {
    //          this.setState({
    //              post: res.data
    //          })
    //      })
    // }