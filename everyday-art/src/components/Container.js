import React from "react";
import styled from "styled-components";

// Need to add responsiveness to this! There are no margins on mobile.

const Container = styled.div`
    padding-left: ${props => {
        if (props.full) return 0
        return "calc((100vw - 960px) / 2)"
    }};

    padding-right: ${props => {
        if (props.full) return 0
        return "calc((100vw - 960px) / 2)"
    }};

    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return "15px"
        return "25px"
    }};

    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return "15px"
        return "25px"
    }};

    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

    

`

export default Container;