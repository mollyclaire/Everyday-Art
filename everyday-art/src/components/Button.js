import React from "react"; 
import styled from "styled-components";

const Save = styled.button`
    border-radius: 5px;
    background-color: red;
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
                value={this.props.value}
                >Save
                </Save>
            </div>
        )
    }
}

export default Button;