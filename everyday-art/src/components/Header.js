import React from "react"; 
import styled from "styled-components";
// import icon from './calendar.png';
import Time from "../utils/Time";

const Art = styled.div`
    font-size: 2em;
    text-align: center;
    color: black;
    padding: .3em;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    
`

const Date = styled.div`
    
    font-size: 2em;
    font-family: 'Montserrat', sans-serif
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
