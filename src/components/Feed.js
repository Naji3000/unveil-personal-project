import React from 'react';
import FeedNav from './FeedNav'
import axios from 'axios'
import Post from './Post'
import Spinner from 'react-spinkit'
import './styles/feed.css'
import {updateUser} from '../redux/reducers/userReducer'
import {connect} from 'react-redux'
require('dotenv').config()


class Feed extends React.Component {
    constructor(){
        super()
        this.state = {
            postTitle: '',
            postDescription: '',
            feedPic: '',
            previousPosts: [],
            selectedFile: null,
            loading: null
        }
    }
    componentDidMount() {
        this.fetchPosts()
        this.setState({
        loading: true,
        });

    //     axios.get('/cloud/gallery').then(({ data }) => {
    //     this.setState({
            
    //         images: [...data, ...this.state.images],
    //         loading: false

            
    //     });
    //     // console.log(this.state.images)
    //     });

    //     const pusher = new Pusher({
    //         key: process.env.PUSHER_APP_KEY,
    //         cluster: process.env.PUSHER_APP_CLUSTER,
    //         encrypted: true,
    //     });

    //     const channel = pusher.subscribe('gallery');
    //         channel.bind('upload', data => {
    //         this.setState({
    //             images: [data.image, ...this.state.images],
    //         });
    //     });
    // }

    // fileChange = event => {
    //     const file = event.target.files[0];
    //     this.setState({ selectedFile: file });
    // };

    // uploadImage = event => {
    //     event.preventDefault();

    //     if (!this.state.selectedFile) return;
    //     const formData = new FormData();
    //         formData.append(
    //         'image',
    //         this.state.selectedFile,
    //         this.state.selectedFile.name
    //     );

    //     axios.post('/cloud/upload', formData).then(({ data }) => {
    //     this.setState({
    //         loading: false,
    //     });
    //     });
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
            postTitle: this.state.postTitle,
            postDescription: this.state.postDescription,
            feedPic: this.state.feedPic
        })
        this.fetchPosts();
    }

    // showWidget = (widget) => {
    //     widget.open()

    // }

    checkUploadedPic = (event, resultEvent) => {
        if(resultEvent.event === 'success'){
            this.setState({feedPic: resultEvent.info.url})
        }
    }

    render(){

        var widget = window.cloudinary.createUploadWidget({ 
            cloudName: "ddxmzokt6", 
            uploadPreset: "Unveil-upload",
            sources: ["local", "url", "dropbox", "facebook", "instagram"]},
            (error, result) => { this.checkUploadedPic(error, result)});

        
            
        
        // const images = this.state.images.map((e, index) => image(e.secure_url, index));

        const sortedArr = this.state.previousPosts.sort((a, b) => {
            return a.post_id - b.post_id;
        });
        // {console.log(this.state)}

        return(
            <>
            <FeedNav />
                <div className='News-feed-title'>
                    <h1>NEWS FEED</h1>
                </div>
            <section className='container-post'>

                <div className='box-1'>
                    <h4 className='On-your-mind'>What's on your mind?</h4>
                    
            <div className='post-text'>
                
                    <input className='input-title' placeholder="Title" 
                        onChange={e => this.setState({postTitle: e.target.value})}
                        />
                        <input className='input-description' placeholder='Description' 
                        onChange={e => this.setState({postDescription: e.target.value})}>
        
                        </input>

                        <button onClick={()=> widget.open()}>Select image</button>
                        <button className='post-button' onClick={this.handleClick} >Post</button>

                        <img alt="" className="photo" src={this.state.feedPic} />
                    
            </div>

            {/* <form className='feed-form' method="post" onSubmit={this.uploadImage}>

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

                            <button  type='submit'>Upload!</button>
            </form> */}


            <div className='loading-indicator'>
                {this.state.loading ? <Spinner name="spinner" /> : ''}
            </div>
            
                                            <div className='text-info'>
                                                        {sortedArr.map(userPost => {
                                                            return (
                                                            <>
                                                                <Post 
                                                                id={userPost.post_id}
                                                                postTitle={userPost.title} 
                                                                postDescription={userPost.description}
                                                                feedPic = {userPost.url}
                                                                updatePreviousPosts={this.updatePreviousPosts}
                                                                />
                                                            </>
                                                            )
                                                        })}     
                                            </div>

            {/* <div className='image-gallery'>{images}</div> */}
            </div>
            </section>
            </>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, {updateUser}) (Feed)
