import React from 'react';
import NavBar from '../nav-bar/nav-bar';
import BlogService from '../../services/blog-service';
import './blog.css';
import formExtract from '../../util/form-extract';
import {Row, Col, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitForm(event) {
        event.preventDefault();
        const blogPost = formExtract(event);

        BlogService.createBlogPost(blogPost)
            .then((res) => {
                console.log(res);
            });
    }

    render() {
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
          </div>
      );
    }
}
