import { Component } from "react";
export class Filter extends Component{
    state={
        searchValue: ""
    }

handleChangeSearch = (e)=>{
    this.setState({searchValue: e.target.value});
    this.props.onFilter(e.target.value); 
}

    render(){
        return(
            <div>
                <h2>Фільтр контакту</h2>
                <input
                    type="text"
                    value={this.state.searchValue}
                    onChange={this.handleChangeSearch}
                    />
            </div>
        )
    }
}