import React from "react"; 
import styled from "styled-components";
import icon from './calendar.png';

const Art = styled.div`
    font-size: 2em;
    text-align: center;
    color: black;
    padding: .5em;
    display: flex;
    font-family: 'Montserrat', sans-serif
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
`

const Date = styled.img`
    width: 150px;
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
                    <Date src={icon} alt="Calendar"/>
                </Container>
            </div>
  
        )
}
}

  export default Header;
