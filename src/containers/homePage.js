import React, { Component } from 'react';
import { FetchList } from '../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TitleFilter from './titleFilter';
import { SearchTitle } from '../actions/titleSearch'

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {term :''}
        this.fetchDataList = this.fetchDataList.bind(this);
        this.fetchDataList(this.state.term);
    }

    fetchDataList (term) {
        
        if(term === ''){
        this.props.FetchList();
        }
        else {
            this.setState ({term :term})
        this.props.SearchTitle(term , this.props.dataList)
        }
    }

    render() {
        return (
            <TitleFilter   filterTitle = {this.fetchDataList}/>
        );
    }
}



function mapStateToProps(state) {
    return {
        dataList: state.dataList
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({FetchList : FetchList,SearchTitle : SearchTitle},dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)