import React, { Component, Fragment } from 'react';
import '../App.css'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="header">
                    <a href="/" className="logo"><span>soo.dev</span></a>
                    <div className="spacer"></div>
                    <a href="/create"><button type="button" className="btn btn-info createBtn">글쓰기</button></a>
                </header>
            </Fragment>
        );
    }
}

export default Header;