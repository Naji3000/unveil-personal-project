import React from "react";
import {updateUser} from '../redux/reducers/userReducer'
import {connect} from 'react-redux'
import axios from "axios";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inEditStatus: false,
            inputFieldText: "",
            textArea: "",
            feedPic: ''
        }
    }
    handleClick = e => {
        this.setState({inEditStatus: false});
        axios.put(`/api/post/${this.props.id}`, {
            description: this.state.textArea,
            title: this.state.inputFieldText
        }).then(response => {
            this.props.updatePreviousPosts(response.data);
        })
    }

    handleDelete = () => {
        axios.delete(`/api/post/${this.props.id}`).then(response => {
            this.props.updatePreviousPosts(response.data);
        })
    }

    render() {
        return (
            <div>

                {
                    this.state.inEditStatus === false ?
                    <>
                        <h3>{this.props.postTitle}</h3>
                        <h4>{this.props.postDescription}</h4>
                        
                    </>
                    :
                    <>
                        <input 
                        defaultValue={this.props.postTitle}
                        onChange={e => this.setState({inputFieldText: e.target.value})}
                        />
                        <input
                        onChange={(e) => this.setState({textArea: e.target.value})}
                        defaultValue={this.props.post}
                        >
                        </input>
                    </>
                }
                
                        
                        {
                            this.state.inEditStatus === false ?
                            <button
                            onClick={() => this.setState({inEditStatus: true})}>
                                Edit
                            </button>
                        :
                            <button
                            onClick={this.handleClick}>
                                Save
                            </button>
                        }
                        <button
                        onClick={this.handleDelete}>Delete</button>
                
                    {/* <button onClick>Change</button> */}
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {updateUser}) (Post)