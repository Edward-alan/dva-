import React, { Component } from 'react';
// import Editor from 'for-editor'
export class Examdetail extends Component {
    state = {
        data: [],
        value: '',
    }
    render() {
        // const { value, data } = this.state;
        return (
            <div>
                {
                    this.state.data && this.state.data.map((item, index) => {
                        return <div className="item">
                            <div>{item.title}</div>
                            <div>{item.questions_answer}</div>
                        </div>
                    })
                }
                {/* <Editor value={value} onChange={this.handleChange.bind(this)} placeholder={data}/> */}
            </div>
        );
    }
    componentDidMount() {
        console.log()
        this.setState({
            data: this.props.location.params.data.questions
        })
    }

    // handleChange(value) {
    //     this.setState({
    //       value
    //     })
    // }

}

export default Examdetail;
