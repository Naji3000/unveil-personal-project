import React from 'react'

class Feed extends React.Component {
    constructor(props){

        super(props)
        this.state = {
            post: []

        }
    }


    render(){
        return(
            <>
            
            <div >
                <h1>News Feed</h1>


                    <div className='field'>

                            <input type='text' className='input-comment' name='name' placeholder='Your name' />
                    
                    </div>
                    <div className='field'>

                            <textarea className='textarea' name='comments' placeholder='add comment'></textarea>

                    </div>
                <div className='field'>
                    
                            <button className='button-is-privacy'>Submit</button>

                </div>

        </div>
            
            
            </>
        )
    }
}

export default Feed;