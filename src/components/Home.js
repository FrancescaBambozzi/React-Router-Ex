import React, { Component } from 'react'
import axios from 'axios' //to fetch dummy data 
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component {
    state = {
        posts: [] //it's empty 'cause we don't have data yet
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            //once the data request has completed, we use the .then() method to make an action
            .then(res => { //then, 'res' -> respond to data request
                console.log(res)
                //we want to grab some data and push them inside the state's array
                this.setState({
                    posts: res.data.slice(0, 10) //to get only the firsts 10 posts
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="poke-card-back" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList} {/*render to the DOM the const created above by mapping the posts data */}
            </div>
        )
    }
}
export default Home;