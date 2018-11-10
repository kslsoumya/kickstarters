import React,{Component} from 'react';


export default class TitleFilter extends Component {
    constructor(props){
    super(props);
    this.state ={
        term :''
    }
    }

    searchTermChange(val) {
        this.setState ({term : val})
        if(val === '') {
            this.props.filterTitle(val);
        }
    }


    render () {
        
        return (
            <div className='row searchBar' >
                <div className='col-md-4'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" 
                        value ={this.state.term}
                        onChange ={(event)=> this.searchTermChange(event.target.value)}
                        /> 
                        <span className='input-group-btn'>
                            <button className='btn  btn-secondary'
                            onClick ={()=> this.props.filterTitle(this.state.term)}>search</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}


// function mapStateToProps(state) {
//     return {
//         dataList: state.dataList
//     };
// }


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ TitleSearch: TitleSearch }, dispatch);
// }


// export default connect(mapStateToProps)(TitleFilter)