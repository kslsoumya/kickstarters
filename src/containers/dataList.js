import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DataCard from '../components/dataCard';



class DataList extends Component {

    getList() {
        if (this.props.dataList.length === 0) {
            return <div>Loading........</div>
        } else {
            return (
                <Grid container spacing={24}>
                    {this.props.dataList.map(
                        (item) => {
                            return (
                                <Grid item xs={12} sm={12} md={4} lg={4} key={item['s.no']}>
                                    <DataCard key={item['s.no']} starter={item} />
                                </Grid>
                            );
                        }
                    )}
                </Grid>
            )
        }

    }
    render() {
        return (
            <div>
                {this.getList()}

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        dataList: state.dataList
    };
}

export default connect(mapStateToProps)(DataList)