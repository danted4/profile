import React from 'react';
import axios from 'axios';
import * as actionList from '../../actions/actions';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axiosHandler from '../../utils/axiosHandler';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Spinner } from 'react-bootstrap';
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false
        };
    }
    componentDidMount() {
        const img = new Image();
        img.onload = () => {
            this.setState({
                loaded: true
            });
        };
        img.onerror = () => {
            this.setState({
                error: true
            });
        };
        img.src = process.env.PUBLIC_URL + "/images/prof2.jpg";
        axiosHandler.updateAppState(this.props.updateAction,'home');
    }
    render() {
        console.log(this.props.appState.homeReducer)
        return <React.Fragment>
            <div id="home" className="row no-gutters">
                <div className="col-xs-12 col-md-6 col-lg-6">
                    <Jumbotron style={{ marginBottom: '0' }}>
                        <h1>
                            {this.props.appState.homeReducer.title}
                        </h1>
                        <p>
                            {
                                this.props.appState.homeReducer.bio
                            }
                        </p>
                        <p>
                            <div className="row no-gutters">
                                <div className="col-xs-12 col-md-12 col-lg-12">
                                    <span><strong>Phone</strong></span>&nbsp;:&nbsp;
                                        <CopyToClipboard text={this.props.appState.homeReducer.email} onCopy={() => alert('Contact Copied.')}>
                                        <span>{this.props.appState.homeReducer.phone}</span>
                                    </CopyToClipboard>
                                </div>
                                <div className="col-xs-12 col-md-12 col-lg-12">
                                    <span><strong>Email</strong></span>&nbsp;:&nbsp;
                                        <CopyToClipboard text={this.props.appState.homeReducer.email} onCopy={() => alert('Email Copied.')}>
                                        <span>{this.props.appState.homeReducer.email}</span></CopyToClipboard>
                                </div>
                                <div className="col-xs-12 col-md-12 col-lg-12">
                                    <span><strong>Social</strong></span>&nbsp;:&nbsp;<span>icons</span>
                                </div>
                            </div>
                        </p>

                    </Jumbotron>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                    {this.state.loaded ?
                        <img className="profimg" src={process.env.PUBLIC_URL + "/images/prof2.jpg"} alt="image" />
                        :
                        <div className="row no-gutters" style={{ height: '100%' }}>
                            <div className="col-xs-12 col-md-12 col-lg-12" style={{ height: '10%', top: '50%', transform: 'translateY(-50%)' }}>
                                <Spinner animation="grow" variant="dark" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>&nbsp;
                                <Spinner animation="grow" variant="dark" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>&nbsp;
                                <Spinner animation="grow" variant="dark" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                        </div>
                    }
                </div>
                {/*Skills*/}
                <div id="skills" className="col-xs-12 col-md-12 col-lg-12">
                    <div className="row no-gutters">
                        <div className="col-xs-4 col-md-4 col-lg-4" style={{ padding: '2rem', textAlign: 'left' }}>
                            <h2>Skills</h2>
                            <p>{this.props.appState.homeReducer.skills.desc}</p>
                        </div>
                        <div className="col-xs-8 col-md-8 col-lg-8">
                            <div className="row no-gutters">
                                <div className="col-xs-6 col-md-6 col-lg-6" style={{ padding: '2rem', textAlign: 'left' }}>
                                    <h4>Javascript</h4>
                                    <p>
                                        {this.props.appState.homeReducer.skills.javascript}
                                    </p>
                                </div>
                                <div className="col-xs-6 col-md-6 col-lg-6 " style={{ padding: '2rem', textAlign: 'left' }}>
                                    <h4>Frontend Development</h4>
                                    <p>
                                        {this.props.appState.homeReducer.skills.frontend}
                                    </p>
                                </div>
                                <div className="col-xs-6 col-md-6 col-lg-6" style={{ padding: '2rem', textAlign: 'left' }}>
                                    <h4>Database</h4>
                                    <p>
                                        {this.props.appState.homeReducer.skills.database}
                                    </p>
                                </div>
                                <div className="col-xs-6 col-md-6 col-lg-6" style={{ padding: '2rem', textAlign: 'left' }}>
                                    <h4>Backend Development</h4>
                                    <p>
                                        {this.props.appState.homeReducer.skills.backend}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Experience*/}
                <div id="experience" className="col-xs-12 col-md-12 col-lg-12">
                    <div className="row no-gutters">
                    <div className="col-xs-4 col-md-4 col-lg-4" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h2>Experience</h2>
                        <p>{this.props.appState.homeReducer.experience.desc}</p>
                    </div>
                    <div className="col-xs-8 col-md-8 col-lg-8">
                        <div className="row no-gutters">
                            <div className="col-xs-12 col-md-12 col-lg-12" style={{ padding: '2rem', textAlign: 'left' }}>
                                <h4>{this.props.appState.homeReducer.experience.infosys.title}</h4><h5>{this.props.appState.homeReducer.experience.infosys.company}</h5>
                                <p>
                                    {this.props.appState.homeReducer.experience.infosys.desc}
                                </p>
                            </div>
                            <div className="col-xs-12 col-md-12 col-lg-12" style={{ padding: '0 2rem 2rem 2rem', textAlign: 'left' }}>
                                <h4>{this.props.appState.homeReducer.experience.wipro.title}</h4><h5>{this.props.appState.homeReducer.experience.wipro.company}</h5>
                                <p>
                                    {this.props.appState.homeReducer.experience.wipro.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        appState: state
    }

}
const mapDispatchToProps = dispatch => {
    return {
        updateAction: (data) => dispatch(actionList.updateStateActionCreator(data)),
        logoutAction: () => dispatch({})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);