import React from "react"; 
import styled from "styled-components";

const Save = styled.button`
    border-radius: 50%;
    background-color: darkgrey;
    color: white;
    height: 50px;
    width: 50px;
    margin: 2em 0em 3em 0em;
    font-size: 100%;
    box-shadow:  0 0 5px  rgba(0,0,0,0.4);
    -moz-box-shadow: 0 0 5px  rgba(0,0,0,0.4);
    -webkit-box-shadow: 0 0 5px  rgba(0,0,0,0.4);
    -o-box-shadow: 0 0 5px  rgba(0,0,0,0.4);
`

class Button extends React.Component {
    // constructor(props) {
    //     super(props);
   
    // this.saveArtwork = this.saveArtwork.bind(this);
    // }

    // saveArtwork() {
    //     this.props.saveArtwork();
    // }

    render(props) {
        return (
            <div>
                <Save 
                onClick={this.props.handleSubmit}
                value={this.props.artworks}
                >+
                </Save>
            </div>
        )
    }
}

export default Button;