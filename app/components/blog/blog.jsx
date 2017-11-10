import React from 'react';
import NavBar from '../nav-bar/nav-bar';
import BlogService from '../../services/blog-service';
import BlogStore from '../../stores/blog-store';
import BlogActions from '../../actions/blog-actions';
import './blog.css';
import formExtract from '../../util/form-extract';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            loading: true
        };

        this.updateBlogData = this.updateBlogData.bind(this);
    }

    componentWillMount() {
        BlogStore.addChangeListener(this.updateBlogData);
    }

    componentDidMount() {
        BlogActions.getAllBlogPosts();
    }

    componentWillUnmount() {
        BlogStore.removeChangeListener(this.updateBlogData);
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
        const blogPost = formExtract(event);

        BlogService.createBlogPost(blogPost)
            .then((res) => {
                console.log(res);
            });
    }

    renderBlogPost(blogPost) {
        return (
            <Row>
                <Col>
                    <h3>{blogPost.title}</h3>
                </Col>
                <Col>
                    <h4>{blogPost.user}</h4>
                </Col>
                <Col>
                    <p>{blogPost.date}</p>
                </Col>
                <Col>
                    <p>{blogPost.post}</p>
                </Col>
            </Row>
        );
    }

    render() {
        console.log(this.state);
      return (
          <div>
              <Row>
                  <Col xs={8} xsOffset={2}>
                      <form className="blog-post-form" onSubmit={this.submitForm}>
                          <FormGroup controlId="formControlTitle">
                              <ControlLabel>Title*</ControlLabel>
                              <FormControl type="text" name="title" placeholder="Title" required/>
                          </FormGroup>
                          <FormGroup controlId="formControlAuthor">
                              <ControlLabel>Author*</ControlLabel>
                              <FormControl type="text" name="user" placeholder="Author" required/>
                          </FormGroup>
                          <FormGroup controlId="formControlPost">
                              <ControlLabel>Post*</ControlLabel>
                              <FormControl componentClass="textarea" name="post" placeholder="Post" required/>
                          </FormGroup>
                          <FormGroup>
                              <Button className="submit-button" type="submit" value="Post">Post</Button>
                          </FormGroup>
                      </form>
                  </Col>
              </Row>
              {!this.state.loading && (this.state.blogPosts || []).map(blogPost => (
                  <div key={blogPost._id}>
                      {this.renderBlogPost(blogPost)}
                  </div>
              ))}
          </div>
      );
    }
}
