import React from 'react';
import axios from 'axios';
import * as actionList from '../../actions/actions';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Jumbotron from 'react-bootstrap/Jumbotron';
class HomeComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
            axios.get('https://raw.githubusercontent.com/danted4/profile/master/public/json/content.json')
            .then(res=>{
              console.log(res.data.home);
              this.props.updateAction(res.data.home);
            })
            .catch(err => {
              console.log(err);
            })
    }
    render(){
        console.log(this.props.appState.rootReducer)
        return <React.Fragment>
            <div id="home" className="row no-gutters">
                <div className="col-xs-12 col-md-6 col-lg-6">
                        <Jumbotron>
                            <h1>
                            {this.props.appState.rootReducer.title}
                            </h1>
                            <p>
                                {
                                    this.props.appState.rootReducer.bio
                                }
                            </p>
                            <p>
                                <div className="row no-gutters">
                                    <div className="col-xs-12 col-md-12 col-lg-12">
                                        <span><strong>Phone</strong></span>&nbsp;:&nbsp;
                                        <CopyToClipboard text={this.props.appState.rootReducer.email} onCopy={() => alert('Contact Copied.')}>
                                        <span>{this.props.appState.rootReducer.phone}</span>
                                        </CopyToClipboard>
                                    </div>
                                    <div className="col-xs-12 col-md-12 col-lg-12">
                                        <span><strong>Email</strong></span>&nbsp;:&nbsp;
                                        <CopyToClipboard text={this.props.appState.rootReducer.email} onCopy={() => alert('Email Copied.')}>
                                        <span>{this.props.appState.rootReducer.email}</span></CopyToClipboard>
                                    </div>
                                    <div className="col-xs-12 col-md-12 col-lg-12">
                                        <span><strong>Social</strong></span>&nbsp;:&nbsp;<span>icons</span>
                                    </div>
                                </div>
                            </p>
                        
                        </Jumbotron>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                    <img className="profimg" src={process.env.PUBLIC_URL + "/images/prof2.jpg"} alt="image" />
                </div>
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return{
      appState : state
    }
  
  }
  const mapDispatchToProps = dispatch =>{
    return{
      updateAction : (data) => dispatch(actionList.updateStateActionCreator(data)),
      logoutAction : () => dispatch({})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);