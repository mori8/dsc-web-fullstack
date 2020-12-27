import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class articleListItem extends Component {
    render() {
        // props.info에서 title, author, date, hits 정보 가져오기
        const { id, title, name, date } = this.props.info;
        const dateOnly = date.split('T')[0];
        const link = "/board/" + id;
        const centerAlign = {
            textAlign: "center"
        }
        return (
            <tr>
                <td style={centerAlign}>{id}</td>
                <td><Link to={link} className="black">{title}</Link></td>
                <td>{name}</td>
                <td>{dateOnly}</td>
            </tr>
        );
    }
}

export default articleListItem;