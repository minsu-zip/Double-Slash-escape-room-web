import React from "react";
import * as S from './style.js';

import { useSelector, useActions } from 'react-redux';
const OffsetCardList = () => {
    const [showResults, setShowResults] = React.useState(false);
    const [showButtons, setShowButtons] = React.useState(true);

    const theOthersTheme = useSelector((state) => state.themes.theOthersTheme);

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

    const mainimg = imgsilde.slice(0, 8);
    const otherimg = imgsilde.slice(8);

    const onClick = () => {
        setShowResults(true);
        setShowButtons(false);
    }

    return (
        <>
            <S.Container>
                <S.Row>
                    {mainimg}
                </S.Row>

                {showResults ? <S.Row>{otherimg}</S.Row> : null}

            </S.Container>

            {showButtons ? <S.More> <button onClick={onClick} >more</button></S.More> : null}


        </>
    )
}

export default OffsetCardList;

