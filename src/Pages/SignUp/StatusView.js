import react, { Component } from 'react';
// import "./StatusView.scss";

class StatusView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="StatusView">
        <div className="SignUpTitle">회원가입</div>
        <div className="nowState">
          <div className={status === 'agreement' ? 'setNow' : ''}>정보수집동의</div>
          <div className={status === 'info' ? 'setNow' : ''}>정보입력</div>
          <div className={status === 'com' ? 'setNow' : ''}>가입완료</div>
        </div>
      </div>
    );
  }
}
export default StatusView;
