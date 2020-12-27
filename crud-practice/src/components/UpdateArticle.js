import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

/* 참고자료: 
* https://ndb796.tistory.com/222
 */

class UpdateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            body: "",
            id: "",
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
    }

    // componentDidMount() {
    //     this.callAPI().then(
    //         res => {
    //             this.setState({article: res[0]});
    //     }).catch(
    //         error => { console.log(error);
    //     });
    // }

    componentDidMount() {
        console.log(this.props.location.state.title);
        this.setState({
            title: this.props.location.state.title,
            name: this.props.location.state.name,
            body: this.props.location.state.body,
            id: this.props.location.state.id
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.updateArticle();
        alert("글이 정상적으로 수정되었습니다.");
        window.location.href = `/board/${this.props.match.params.id}`;
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        // console.log(this.state);
    }

    updateArticle = async () => {
        // TODO: url 받으면 채워넣기
        const url = 'http://localhost:3001/api/update';

        let formData = {
            title: this.state.title,
            name: this.state.name,
            body: this.state.body,
            id: this.props.match.params.id
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
            <form name="mainform" style={formStyle} onSubmit={this.handleFormSubmit} method="post">
                <h3>글 수정하기</h3>
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
                    <button type="submit" className="btn btn-primary" style={btnStyle}>수정하기!</button>
                    <button type="button" className="btn btn-secondary">취소</button>
                </div>
            </form>
        );
    }
}

export default UpdateArticle;