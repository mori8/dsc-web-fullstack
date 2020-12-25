import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class articleListItem extends Component {
    render() {
        // props.info에서 title, author, date, hits 정보 가져오기
        const { id, title, name, date } = this.props.info;
        const link = "/board/" + id;
        return (
            <tr>
                <td>{id}</td>
                <td><Link to={link} className="black">{title}</Link></td>
                <td>{name}</td>
                <td>{date}</td>
            </tr>
        );
    }
}

export default articleListItem;