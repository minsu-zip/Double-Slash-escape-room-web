import React from "react";
import Post from '../Post';
import a from '../SwipeCardList'
import * as S from './style.js';


const OffsetCardList = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);

    const Results = () => (
        <div id="results" className="search-results">
            <S.Row>

                <S.Column>
                    <S.Item>
                        <S.Img><Post></Post></S.Img>
                        <p>테마명</p>
                    </S.Item>
                </S.Column>

                <S.Column>
                    <S.Item>
                        <S.Img><Post></Post></S.Img>
                        <p>테마명</p>
                    </S.Item>
                </S.Column>

                <S.Column>
                    <S.Item>
                        <S.Img><Post></Post></S.Img>
                        <p>테마명</p>
                    </S.Item>
                </S.Column>

                <S.Column>
                    <S.Item>
                        <S.Img><Post></Post></S.Img>
                        <p>테마명</p>
                    </S.Item>
                </S.Column>

            </S.Row>
        </div>
    )

    return (
        <>

            <S.Container>
                <S.Row>

                    <S.Column>
                        <S.Item>
                            <S.Img><Post></Post></S.Img>
                            <p>테마명</p>
                        </S.Item>
                    </S.Column>

                    <S.Column>
                        <S.Item>
                            <S.Img><Post></Post></S.Img>
                            <p>테마명</p>
                        </S.Item>
                    </S.Column>

                    <S.Column>
                        <S.Item>
                            <S.Img><Post></Post></S.Img>
                            <p>테마명</p>
                        </S.Item>
                    </S.Column>

                    <S.Column>
                        <S.Item>
                            <S.Img><Post></Post></S.Img>
                            <p>테마명</p>
                        </S.Item>
                    </S.Column>

                </S.Row>

                {showResults ? <Results /> : null}

            </S.Container>

            <div onClick={onClick}><S.More><button id="button">more</button></S.More></div>
        </>
    )
}

export default OffsetCardList;

