import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'; //higher-order comp (function)that connect the component to the redux store

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props; //get the data from the props
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

const mapStateToProps = (state) => { //the parameter is the state of the redux central store
    return {
        posts: state.posts //we want to import these data from the central store
    }
}
export default connect(mapStateToProps)(Home); //invoking the function and 