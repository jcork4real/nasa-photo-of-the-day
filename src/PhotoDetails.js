import React from "react";
import styled from 'styled-components';

const PhotoDetails = styled.div` 
    width: 65.25%;
    line-height: 3;
`;

function Details(props) {
    // console.log('details', props.data)
    
    if (!props) return <p>Loading...</p>

    return ( 
        <PhotoDetails>
            <p>{props.data.explanation}</p>
        </PhotoDetails>

    );
}

export default Details;