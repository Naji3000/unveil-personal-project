import React from 'react';
import FeedNav from './FeedNav'
import Pusher from 'pusher-js';
import axios from 'axios'
import './styles/feed.css'
require('dotenv').config()


class Feed extends React.Component {
    constructor(){
        super()
        this.state = {
            postTitle: '',
            postInfo: '',
            previousPost: '',
            images: [],
            selectedFile: null,
        


        }
    }
    componentDidMount() {
        this.setState({
        loading: true,
        });

        axios.get('/cloud/gallery').then(({ data }) => {
        this.setState({
            
            images: [...data, ...this.state.images],
            
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

    render(){

        const image = (url, index) => (
            <img alt="" className="photo" key={`image-${index} }`} src={url} />
        );
        const images = this.state.images.map((e, index) => image(e.secure_url, index));




        return(

            <>
            <FeedNav />
            <div>
                

                
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

                <button type='submit'>Upload!</button>
            </form>

            <div>
              {/* {this.state.loading ? <Spinner name="spinner" /> : ''} */}
            </div>

            <div className='image-gallery'>{images}</div>

            </div>
            </>
        )
    }
}

export default Feed;







