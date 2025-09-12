import { Component } from "react";
import styled from "styled-components"

const InputSe = styled.input`
    padding: 15px;
    margin-left: 40px;
    border-radius: 20px;
    border: none;
    box-shadow: 2px 3px 2px;
    width: 650px;
`
const Box = styled.div`
  background-color: rgb(250, 246, 187);
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 150px;

`
const Text = styled.p`
    color: rgb(201, 103, 214);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20px;
    padding-top: 40px;

    padding-left: 40px;

`
export class Filter extends Component{

    
handleChangeSearch = (e) => {
  this.props.onFilter(e.target.value); 
};

    render(){
        return(
            <Box>
                <Text>Фільтр контакту</Text>
                <InputSe
                    type="text"
                    value={this.props.value}
                    onChange={this.handleChangeSearch}
                    />
            </Box>
        )
    }
}

export default Filter;
