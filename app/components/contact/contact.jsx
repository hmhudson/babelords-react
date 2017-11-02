import React from 'react';
import './contact.css';
const iFrameStyle = {
    border: 'none',
    overflow: 'hidden'
};

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2 id="facebook">Facebook</h2>
                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FTheBabeLords%2F&width=147&layout=button_count&action=like&size=large&show_faces=false&share=true&height=46&appId" width="147" height="46" style={iFrameStyle}
                scrolling="no" frameBorder="0" allowTransparency="true"></iframe>

                <h2>Instagram</h2>
                <a href="http://instagram.com/babelords" target="_blank"><img src="http://www.leveragedigitalmedia.com/wp-content/uploads/2016/09/instagram-1581266_1920.jpg" alt="Instagram Logo" id="instaLogo"/></a>

                <h2>Email</h2>
                <a href="mailto:babelordsstl@gmail.com">Email us!</a>
            </div>
        );
    }
}
