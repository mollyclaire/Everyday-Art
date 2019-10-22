import React from "react"; 
import styled from "styled-components";
import Time from "../utils/Time";

/* I need to restyle this a bit, since the spacing is off just a bit */
const Art = styled.div`
    font-size: 2em;
    text-align: right;
    color: black;
    padding: .3em;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-right: 3px;
    
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 1em 0em 1em;
   
    
`

class Header extends React.Component  {
    
    // state = {
    //     date: ""
    // }

    // componentDidMount() {
    //     this.getDate();
    // }

    // getDate = () => {
    //     var date = new Date().getDate();
    //     this.setState({date: date});
    // }

    render() {
        // const { date } = this.state;
        return(
            <div>
                <Container>
                    <Art>ART for</Art>
                    <Time></Time>
                </Container>
            </div>
  
        )
}
}

  export default Header;
