import React from "react";
import Post from '../Post';
import * as S from './style.js';
import dummy from '../../../dummy/themes.json';

import { useSelector, useActions } from 'react-redux';
const OffsetCardList = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);



    const theOthersTheme = useSelector((state) => state.themes.theOthersTheme);
    console.log(theOthersTheme)

    const imgsilde = theOthersTheme.map((other) => {
        return (
            <S.Column>
                <S.Item>
                    <S.Img>
                        <img src={"http://220.149.235.230/" + other.image} ></img>
                        <S.Button><button onClick>찜</button></S.Button>
                        <S.text><div>{other.themeName}</div><div>{other.cafeName + ":   " + other.area}</div> </S.text>
                    </S.Img>
                </S.Item>
            </S.Column>

        )
    })


    const Results = () => (
        <div id="results" className="search-results">
            <S.Row>
                {imgsilde}
            </S.Row>
        </div>
    )


    return (
        <>
            <S.Container>
                <S.Row>
                    {imgsilde}
                </S.Row>

                {showResults ? <Results /> : null}

            </S.Container>

            <S.More> <button onClick={onClick}>more</button></S.More>
        </>
    )
}

export default OffsetCardList;

