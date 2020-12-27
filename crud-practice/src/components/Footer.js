import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const style = {
            width: "100%",
            textAlign: "center",
            padding: "50px"
        }

        return (
            <div style={style}>
                <span>2020(c)Copyright Suyeon Nam All right reserved.</span>
            </div>
        );
    }
}

export default Footer;