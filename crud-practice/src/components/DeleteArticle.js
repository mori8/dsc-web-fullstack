import React, { Component, Fragment } from 'react';

class DeleteArticle extends Component {
    deleteArticle(id) {
        const url = 'http://localhost:3001/api/articles/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        alert("글이 성공적으로 삭제되었습니다.");
        window.location.href = "/board";
    }
    render() {
        return (
            <Fragment>
                <button className={this.props.style} onClick={(e) => { this.deleteArticle(this.props.id)}}>삭제</button>
            </Fragment>
        );
    }
}

export default DeleteArticle;