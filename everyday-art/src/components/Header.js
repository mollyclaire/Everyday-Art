import React from "react"; 
import styled from "styled-components";

const Art = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    padding: 2em;
    display: flex;
    justify-content: center;
`

const Date = styled.div`
  color: black;
  text-align: center;
`

class Header extends React.Component  {
    state = {}

    render() {
        return(
            <div>
                <Art>ART for</Art>
                <Date>TODAY</Date>
            </div>
  
        )
}
}

  export default Header;
