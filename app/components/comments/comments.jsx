import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row, Col, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import BlogService from '../../services/blog-service';
import BlogActions from '../../actions/blog-actions';
import userStore from '../../stores/user-store';
import formExtract from '../../util/form-extract';
import './comments.css';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      blogPost: this.props.blogPost,
      newComment: '',
      currentUser: userStore.getUser() || {},
    };

    this.onCommentChange = this.onCommentChange.bind(this);
    this.showComments = this.showComments.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateBlogPostData = this.updateBlogPostData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.updateBlogPostData(nextProps.blogPost);
  }

  onCommentChange(event) {
    this.setState({ newComment: event.target.value });
  }

  updateBlogPostData(blogPost) {
    this.setState({ blogPost: blogPost, currentUser: userStore.getUser() || {} });
  }

  showComments(event) {
    event.preventDefault();
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  submitForm(event) {
    event.preventDefault();
    const commentObj = {
      newComment: this.state.newComment,
      blogPostId: this.state.blogPost._id,
      userId: this.state.currentUser.id,
    };

    BlogService.createComment(commentObj)
      .then(() => {
        this.setState({ newComment: '' });
        BlogActions.getAllBlogPosts();
      });
  }

  render() {
    return (
      <div className="comment-container">
        {userStore.isLoggedIn() &&
        <form className="blog-post-form" onSubmit={this.submitForm}>
          <Row>
            <Col xs={4} xsOffset={4}>
              <FormGroup controlId="formControlComment">
                <ControlLabel>Comment</ControlLabel>
                <FormControl componentClass="textarea" name="newComment" value={this.state.newComment} onChange={this.onCommentChange} placeholder="Leave us a comment!" required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Button className="submit-button" type="submit" value="Submit">Submit</Button>
            </FormGroup>
          </Row>
        </form>}
        <a onClick={this.showComments}><p className="length">{this.state.blogPost.comments.length} Comments</p></a>
        {this.state.visible &&
        <div>
          {(this.state.blogPost.comments || []).map(comment => (
            <div>
              <div className="comment-user-time">
                <p className="user comment-user-time">{`${comment.user.profile.firstName} ${comment.user.profile.lastName}`}</p>
                <p className="time comment-user-time date">{moment(comment.date).format('MMM D, YYYY h:mm A')}</p>
              </div>
              <p className="comment">{comment.comment}</p>
            </div>
          ))}
        </div>}
      </div>
    );
  }
}


// Prop comments should be an array
Comments.propTypes = {
  blogPost: PropTypes.object
};
