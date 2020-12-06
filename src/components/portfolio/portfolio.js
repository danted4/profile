import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import axiosHandler from '../../utils/axiosHandler';
import * as actionList from '../../actions/actions';
import { connect } from 'react-redux';

class PortfolioComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axiosHandler.updateAppState(this.props.updateAction,'portfolio');
    }

    render(){
        return <React.Fragment>
            <div className="row no-gutters">
            <Jumbotron className="col-xs-12 col-md-12 col-lg-12">
                <p><h3>
                    {this.props.appState.portfolioReducer.main}
                </h3></p>
                <p>
                    {this.props.appState.portfolioReducer.desc}
                </p>
            </Jumbotron>
            <div className="col-xs-12 col-md-12 col-lg-12">
                <h1 style={{color:"grey"}}>{this.props.appState.portfolioReducer.progress}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioComponent);