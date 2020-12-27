// 오늘의 깨달음: Arrow functions get this from the scope they are defined in. Regular functions get their own this based on the caller.

import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem';

class ArticleList extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.callAPI().then(
            res => {
                this.setState({articles: res});
        }).catch(
            error => { console.log(error);
        });
    }

    callAPI = async () => {
        const res = await fetch('/api/articles');
        const body = await res.json();
        return body;
    }

    render() {
        const style = {
            width: "85%",
            margin: "20px auto",
        }

        const titleCellWidthStyle = {
            width: "60%"
        }

        const centerAlign = {
            textAlign: "center"
        }
 
         const list = this.state.articles.map(
             info => (<ArticleListItem info={info} key={info.id}/>));

        return (
            <div>
            <h3 style={style}>익명게시판🎄</h3>
               <table className="table" style={style}>
                   <thead>
                        <tr style={centerAlign}>
                            <td>번호</td>
                            <td style={titleCellWidthStyle}>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                        </tr>
                   </thead>
                   <tbody>
                        {list}
                   </tbody>
               </table>
            </div>
        );
    }
}

export default ArticleList;