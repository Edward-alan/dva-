/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';

class MainHeader extends Component {
    render() {
        return (
            <div className='mainHe'>
           <h2>{this.props.arr}</h2>
            </div>
        );
    }
}

export default MainHeader;