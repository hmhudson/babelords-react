import React from 'react';
export default class App extends React.Component {
   render() {
    let pageLayout = (
        <div>
            <div>
                {this.props.children}
            </div>
        </div>
    );
      return (
         <div className="site-index-route">
            {pageLayout}
         </div>
      );
   }
}

App.propTypes = {
    children: React.PropTypes.object,
    params: React.PropTypes.object
};
