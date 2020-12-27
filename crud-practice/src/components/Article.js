import React, { Component } from 'react';
import DeleteArticle from './DeleteArticle';

class Article extends Component {
    state = {
        'article': []
    }

    // TODO: 중복되는 코드 줄이기
    componentDidMount() {
        this.callAPI().then(
            res => {
                this.setState({article: res[0]});
        }).catch(
            error => { console.log(error);
        });
    }

    callAPI = async () => {
        const { id } = this.props.match.params;
        const res = await fetch(`/api/articles/${id}`);
        const body = await res.json();
        return body;
    }

    render() {
        const btnDivStyle = {
            margin: "5px",
            float: "right",
        }

        const btnStyle = {
            margin: "5px",
        }
        return (
            <div className="article" key={this.state.article.id}>
            <h2 className="article-title">{this.state.article.title}</h2>
            <div className="article-info">
                <p className="article-userid">작성자: {this.state.article.name}</p>
                <div className="spacer"></div>
                <p className="article-id">글번호: {this.state.article.id}</p>
            </div>
            <p className="article-body">{this.state.article.body}</p>
            <div style={btnDivStyle}>
                    <button type="submit" className="btn btn-secondary" style={btnStyle}>수정</button>
                    <DeleteArticle id={this.state.article.id} style="btn btn-secondary">삭제</DeleteArticle>
                </div>
        </div>
        );
    }
}

export default Article;
