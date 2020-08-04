import React from "react";
import Post from '../Post';
import a from '../SwipeCardList'
import * as S from './style.js';


const OffsetCardList = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);
    const slides_s = [];

    for (let i = 0; i < 4; i++) {
        slides_s.push(
        <S.Column>
            <S.Item>
                <S.Img><Post></Post><S.text><button>찜</button></S.text></S.Img>
                <div>설명추가</div>
            </S.Item>
        </S.Column>
        )
      }

    const Results = () => (
        <div id="results" className="search-results">
            <S.Row>
                {slides_s};
            </S.Row>
        </div>
    )

    return (
        <>
            <S.Container>
                <S.Row>
                    {slides_s};
                </S.Row>

                {showResults ? <Results /> : null}

            </S.Container>

            <S.More> <button onClick={onClick}>more</button></S.More>
        </>
    )
}

export default OffsetCardList;

