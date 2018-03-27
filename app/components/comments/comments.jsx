import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './comments.css';

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.showComments = this.showComments.bind(this);
    }

showComments(event) {
    event.preventDefault();
    if (this.state.visible === false) {
        this.setState({visible: true});
    } else {
        this.setState({visible: false});
    }
}


    render() {
        return (
            <div className="comment-container">
                <a onClick={this.showComments}><p className="length">{this.props.comments.length} Comments</p></a>
                {this.state.visible && <div>
                    {(this.props.comments || []).map(comment => (
                       <div>
                           <div className="comment-user-time">
                                <p className="user comment-user-time">{comment.user}</p>
                                <p className="comment-user-time">{moment(comment.date).format('MMM D, YYYY h:mm A')}</p>
                           </div>
                            <p>{comment.comment}</p>
                       </div>
                    ))}
                </div>}
            </div>
        );
    }
}


//Prop comments should be an array
Comments.propTypes = {
    comments: PropTypes.array
};
