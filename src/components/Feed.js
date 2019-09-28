import React from 'react';
import FeedNav from './FeedNav'
import Pusher from 'pusher-js';
import axios from 'axios'
import Post from './Post'
import Spinner from 'react-spinkit'
// import {connect} from 'react-redux'
import './styles/feed.css'
require('dotenv').config()


class Feed extends React.Component {
    constructor(){
        super()
        this.state = {
            postTitle: '',
            postDescription: '',
            previousPosts: [],
            images: [],
            selectedFile: null,
            loading: false
        }
    }
    componentDidMount() {
        this.fetchPosts()
        this.setState({
        loading: true,
        });

        axios.get('/cloud/gallery').then(({ data }) => {
        this.setState({
            
            images: [...data, ...this.state.images],
            loading: false

            
        });
        // console.log(this.state.images)
        });

        const pusher = new Pusher({
            key: process.env.PUSHER_APP_KEY,
            cluster: process.env.PUSHER_APP_CLUSTER,
            encrypted: true,
        });

        const channel = pusher.subscribe('gallery');
            channel.bind('upload', data => {
            this.setState({
                images: [data.image, ...this.state.images],
            });
        });
    }

    fileChange = event => {
        const file = event.target.files[0];
        this.setState({ selectedFile: file });
    };

    uploadImage = event => {
        event.preventDefault();

        if (!this.state.selectedFile) return;
        const formData = new FormData();
            formData.append(
            'image',
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        axios.post('/cloud/upload', formData).then(({ data }) => {
        this.setState({
            loading: false,
        });
        });
    };

    updatePreviousPosts = postsArr => {
        this.setState({previousPosts: postsArr});
    }

    fetchPosts = () => {
        axios.get('/api/user/posts').then(response => {
            this.setState({previousPosts: response.data})
        })
    }

    handleClick = e => {
        axios.post('/api/post', {
            postDescription: this.state.postDescription,
            postTitle: this.state.postTitle
        })
        this.fetchPosts();
    }


    render(){

        const image = (url, index) => (
            <img alt="" className="photo" key={`image-${index} }`} src={url} />
        );
        const images = this.state.images.map((e, index) => image(e.secure_url, index));

        const sortedArr = this.state.previousPosts.sort((a, b) => {
            return a.post_id - b.post_id;
        });


        return(

            <>
            <FeedNav />
            <section className='container-post'>
                <div className='box-1'>

            
            <div className='post-text'>
                
                <input placeholder="title" 
                    onChange={e => this.setState({postTitle: e.target.value})}
                    />
                    <textarea
                    onChange={e => this.setState({postDescription: e.target.value})}>
    
                    </textarea>
                    {/* <button
                    >Post!</button> */}
                    <div>
                        {sortedArr.map(userPost => {
                            return (
                            <>
                                <Post 
                                postTitle={userPost.title} 
                                postDescription={userPost.description}
                                id={userPost.post_id}
                                updatePreviousPosts={this.updatePreviousPosts}
                                />
                            </>
                            )
                        })}
            </div>
            </div>

            <form className='feed-form' method="post" onSubmit={this.uploadImage}>

                <label className="label" htmlFor="gallery-image">
                    Select an image to upload
                </label>

            <input
                className='file-change'
                type="file"
                onChange={this.fileChange}
                id="gallery-image"
                accept=".jpg, .jpeg, .png .gif"
            />

                <button onClick={this.handleClick} type='submit'>Upload!</button>
            </form>

            <div>
                {this.state.loading ? <Spinner name="spinner" /> : ''}
            </div>

            <div className='image-gallery'>{images}</div>



            </div>
            </section>
            </>
        )
    }
}

// function mapStateToProps(reduxState){
//     return ({
//         userId: reduxState.user.user_id
//     })
// }

export default Feed;
