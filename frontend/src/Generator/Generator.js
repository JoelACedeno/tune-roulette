import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import TuneRouletteApi from '../Api';
import "./Generator.css";

/** Generator Component  */
const Generator = () => {
    const [currentRender, setCurrentRender] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [previousResults, setPreviousResults] = useState([]);
    const [dropdownValue, setDropdownValue] = useState("");
    const [selectedButton, setSelectedButton] = useState(null);

    /** Handles button click inside of Generator.
     * 
     * Sets selectedButton & selectedOption state to clicked option from the form */
    const handleButtonClick = (option) => {
        setSelectedButton(option);
        setSelectedOption(option);
        // console.log("selected option:", selectedOption);
    };

    /** Handles form submit inside of Generator.
     * 
     * Uses selectedOption state to determine Api GET request, then uses returned data from request to set currentRender state.
     * 
     * Stores data from GET request inside of previousResults state.
     * 
     * Resets dropdownValue state, upon submission. */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedOption) {
            let data;
            if (selectedOption === 'Album') {
                data = await TuneRouletteApi.getAlbum();
            } else if (selectedOption === 'Track') {
                data = await TuneRouletteApi.getTrack();
            } else if (selectedOption === 'Artist') {
                data = await TuneRouletteApi.getArtist();
            }
            setCurrentRender(data);
            // console.log("data:", data);

            // Updates the list of previous results with the new data and selected option
            setPreviousResults((prevResults) => [...prevResults, { data, selectedOption }]);
        }
        setDropdownValue("");
    };

    /** Sets currentRender state to the data of the desired result from the dropdown 
     * 
     * Uses resultIndex from the dropdown bar to choose which previous result to update the currentRender state with */
    const handlePreviousResultSelect = (resultIndex) => {
        const selectedResult = previousResults[resultIndex];
        // setSelectedOption(selectedResult.selectedOption);
        setCurrentRender(selectedResult.data);
    };

    // returns left panel (form) & right panel (result view & previous results dropdown OR welcome message)
    return (
        <div className='Generator'>
            <div className='left-panel'>
                <div className='title'>
                    <a href='/'>
                        <h1><b>Tune Roulette</b></h1>
                    </a>
                    <p>Let the music choose you!</p>
                </div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            type="button"
                            value="Track"
                            name="track"
                            id="track-button"
                            data-testid="track-button"
                            className={
                                selectedButton === "Track" ? "btn-selected" : "btn-default"
                            }
                            onClick={() => handleButtonClick("Track")}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="button"
                            value="Album"
                            name="album"
                            id="album-button"
                            data-testid="album-button"
                            className={
                                selectedButton === "Album" ? "btn-selected" : "btn-default"
                            }
                            onClick={() => handleButtonClick("Album")}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="button"
                            value="Artist"
                            name="artist"
                            id="artist-button"
                            data-testid="artist-button"
                            className={
                                selectedButton === "Artist" ? "btn-selected" : "btn-default"
                            }
                            onClick={() => handleButtonClick("Artist")}
                        />
                    </FormGroup>
                    <Button className='submit-button' type="submit" data-testid="submit-button">Submit</Button>
                </Form>
            </div>

            <div className='right-panel'>
                {currentRender ? (
                    <div className='results-view'>
                        {currentRender.album && (
                            <div>
                                <img src={currentRender.album.image} alt="Album Cover" />
                                <div className='result-bar'>
                                    <p>
                                        <b>{currentRender.album.name} by {currentRender.album.artist}</b>
                                    </p>
                                    <Button className='open-btn'>
                                        <a href={currentRender.album.url} target="_blank" rel="noopener noreferrer">
                                            Listen on Spotify
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        )}
                        {currentRender.track && (
                            <div>
                                <img src={currentRender.track.image} alt="Album Cover" />
                                <div className='result-bar'>
                                    <p>
                                        <b>{currentRender.track.title} by {currentRender.track.artist}</b>
                                    </p>
                                    <Button className='open-btn'>
                                        <a href={currentRender.track.url} target="_blank" rel="noopener noreferrer">
                                            Listen on Spotify
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        )}
                        {currentRender.artist && (
                            <div>
                                <img src={currentRender.artist.image} alt="Album Cover" />
                                <div className='result-bar'>
                                    <h4>
                                        <b>{currentRender.artist.name}</b>
                                    </h4>
                                    <Button className='open-btn'>
                                        <a href={currentRender.artist.url} target="_blank" rel="noopener noreferrer">
                                            Listen on Spotify
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {previousResults && previousResults.length > 0 && (
                            <div className='previousResults-dropdown'>
                                <Label for="previousResult">See a previous result</Label>
                                <Input
                                    type="select"
                                    id="previousResult"
                                    value={dropdownValue}
                                    onChange={(e) => handlePreviousResultSelect(e.target.value)}
                                >
                                    <option value="">Previous results</option>
                                    {previousResults.map((result, index) => (
                                        <option key={index} value={index}>
                                            {`${result.selectedOption}: `}
                                            {result.data.album && `${result.data.album.name} by ${result.data.album.artist}`}
                                            {result.data.track && `${result.data.track.title} by ${result.data.track.artist}`}
                                            {result.data.artist && `${result.data.artist.name}`}
                                        </option>
                                    ))}
                                </Input>
                            </div>
                        )}

                    </div>
                ) : (
                    <div className='welcome-message'>
                        <p>Select an item from the left to get random music to listen to on Spotify!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Generator;
