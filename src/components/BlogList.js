import React from 'react'
import BlogPost from './BlogPost'

class BlogList extends React.Component{
    state = {

    }

    render(){
        return(
            <div id="blog-container">
                <h2 id="blog-header">Kelly's Ride For 5 Blog</h2>
                <BlogPost/>
            </div>
        )
    }
}

export default BlogList;