import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

/* 참고자료: 
* https://ndb796.tistory.com/222
 */

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            body: "",
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.addArticle = this.addArticle.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.addArticle();
        window.location.href = '/board';
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        // console.log(this.state);
    }

    addArticle = async () => {
        // TODO: url 받으면 채워넣기
        const url = 'http://localhost:3001/api/articles';
        let date = new Date();

        let formData = {
            title: this.state.title,
            name: this.state.name,
            body: this.state.body,
            date: date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
        };

        // TODO: 이 형식으로 통신 코드 통일..?
        let res = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(function(res) {
            if (res.ok)
                return res.json();
            throw new Error('네트워크 상태가 불안정합니다.');
        }).then(function(data) {
            return data;
        }).catch(function(error) {
            return console.log(error.message);
        });
        // 리다이렉트 어떻게 함!?
    }
 

    render() {
        const formStyle = {
            width: "85%",
            margin: "20px auto",
        }

        const upperFormStyle = {
            width: "65%",
        }

        const textAreaStyle = {
            display: "block",
            margin: "15px",
        }

        const btnDivStyle = {
            margin: "5px",
            marginRight: "15px",
            float: "right",
        }

        const btnStyle = {
            margin: "5px",
        }
        return (
            <form style={formStyle} onSubmit={this.handleFormSubmit} method="post">
                <h3>글 작성하기</h3>
                <div className="form-row" style={upperFormStyle}>
                    <div className="form-group col-md-6">
                        <label>제목</label>
                        <input type="text" name="title" className="form-control" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>이름</label>
                        <input type="text" name="name" value={this.state.name} className="form-control" placeholder="이름" onChange={this.handleValueChange}/>
                    </div>
                </div>

                <div className="form-group" style={textAreaStyle}>
                    <label style={upperFormStyle}>내용</label>
                    <textarea className="form-control" name="body" value={this.state.body} rows="20" onChange={this.handleValueChange}></textarea>
                </div>
                <div style={btnDivStyle}>
                    <button type="submit" className="btn btn-primary" style={btnStyle}>작성하기!</button>
                    <button type="button" className="btn btn-secondary">취소</button>
                </div>
            </form>
        );
    }
}

export default CreateArticle;