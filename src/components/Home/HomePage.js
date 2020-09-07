import React from 'react';
import { connect } from 'react-redux';
// import { toastr } from 'react-redux-toastr';
//import { withRouter } from 'next/router';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';


//import Main_Layout from '../layouts/Main_Layout.js';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <img src="/img/rollingHills1.jpg" />
                <img src="/img/rollingHills2.jpg" />
                <img src="/img/rollingHills3.jpg" />
            
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps)(withRouter(Home));