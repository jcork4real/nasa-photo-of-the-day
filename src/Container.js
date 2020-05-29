import React, { useState, useEffect } from "react";
import axios from 'axios';
import Details from './PhotoDetails';
import styled from 'styled-components';

const SectionContainer = styled.div` 
    max-width: 1200px;
    padding: 2%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const DailyPhoto = styled.img` 
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 10px;

`;
const NasaTitle = styled.div` 
    background-color: black;
    color:white;
    padding: 15px 0px;
    text-align: center;
    margin-bottom: 2%;
    width: 65.25%;
    border-radius: 10px;
`;

const PhotoContainer = styled.div` 
    max-width: 750px;
`;

function Container() {
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=4a2BhYfVjYAtv7897E29pTbusaCCvpDoIDGdWqKP')
            .then(response => {
                console.log('response', response);
                setNasaData(response.data);
            })
            .catch(error => console.log('err', error));
    }, []);

     return (
        <SectionContainer>
                <h1>
                    <h2>Astronomy Picture of The Day</h2>
                </h1>
                <PhotoContainer>
                    <DailyPhoto src={nasaData.hdurl} alt="Nasa Photo of The Day"></DailyPhoto>
                </PhotoContainer>
                <NasaTitle>
                    <h2>{nasaData.title}</h2>
                </NasaTitle>
            <Details data={nasaData} />
        </SectionContainer>
    );
}

export default Container;