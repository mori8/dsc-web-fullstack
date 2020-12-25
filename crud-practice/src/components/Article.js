import React, { Component } from 'react';

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
        return (
            <div>
                <h2>{this.state.article.title}</h2>
                <p>{this.state.article.name}</p>
                <p>{this.state.article.date}</p>
                <p>{this.state.article.body}</p>
            </div>
        );
    }
}

export default Article;
