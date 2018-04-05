import React from 'react';
import moment from 'moment';
import BlogService from '../../services/blog-service';
import BlogStore from '../../stores/blog-store';
import BlogActions from '../../actions/blog-actions';
import formExtract from '../../util/form-extract';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import UserStore from '../../stores/user-store';
import Comments from '../comments/comments';
import './blog.css';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            title: '',
            user:'',
            post: '',
            loading: true
        };

        this.updateBlogData = this.updateBlogData.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        BlogStore.addChangeListener(this.updateBlogData);
        UserStore.addChangeListener(this.updateBlogData);
    }

    componentDidMount() {
        BlogActions.getAllBlogPosts();
    }

    componentWillUnmount() {
        BlogStore.removeChangeListener(this.updateBlogData);
        UserStore.removeChangeListener(this.updateBlogData);
    }

    updateBlogData() {
        const state = {
            blogPosts: BlogStore.getBlogs(),
            loading: false
        };

        this.setState(state);
    }

    submitForm(event) {
        event.preventDefault();
        const blogPost = {
            title: this.state.title,
            user: this.state.user,
            post: this.state.post
        };

        BlogService.createBlogPost(blogPost)
            .then((res) => {
                this.setState({
                    title: '',
                    user:'',
                    post:''
                });
                BlogActions.getAllBlogPosts();
            });
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onUserChange(event) {
        this.setState({user: event.target.value});
    }

    onPostChange(event) {
        this.setState({post: event.target.value});
    }

    renderBlogPost(blogPost) {
        return (
            <div>
                <Row>
                    <Col xs={8} xsOffset={2}>
                        <Col>
                            <h3 className="blog-title">{blogPost.title}</h3>
                        </Col>
                        <Col>
                            <h4 className="user-date">By: {blogPost.user}</h4>
                        </Col>
                        <Col>
                            <p className="user-date">{moment(blogPost.date).format('MMMM Do, YYYY')}</p>
                        </Col>
                        <Col>
                            <p className="blog-post">{blogPost.post}</p>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <Comments blogPost={blogPost}  />
                   </Col>
                </Row>
            </div>
        );
    }


    render() {
      return (
          <div>
              {UserStore.isAdmin() &&
                  <Row>
                  <Col xs={8} xsOffset={2}>
                      <form className="blog-post-form" onSubmit={this.submitForm}>
                          <FormGroup controlId="formControlTitle">
                              <ControlLabel>Title*</ControlLabel>
                              <FormControl type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onTitleChange} required/>
                          </FormGroup>
                          <FormGroup controlId="formControlAuthor">
                              <ControlLabel>Author*</ControlLabel>
                              <FormControl type="text" name="user" placeholder="Author" value={this.state.user} onChange={this.onUserChange} required/>
                          </FormGroup>
                          <FormGroup controlId="formControlPost">
                              <ControlLabel>Post*</ControlLabel>
                              <FormControl componentClass="textarea" name="post" placeholder="Post" value={this.state.post} onChange={this.onPostChange} required/>
                          </FormGroup>
                          <FormGroup>
                              <Button className="submit-button" type="submit" value="Post">Post</Button>
                          </FormGroup>
                      </form>
                  </Col>
              </Row>}
              {!this.state.loading && (this.state.blogPosts || []).map(blogPost => (
                  <div key={blogPost._id}>
                      {this.renderBlogPost(blogPost)}
                  </div>
              ))}
          </div>
      );
    }
}
