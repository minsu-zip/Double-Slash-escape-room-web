import React from "react";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";

// style
import * as S from "./style";
import GridItem from "./GridItem";

const DescSection = () => {
  const theme = useSelector((state) => state.themeDetail.theme);

  return (
    <>
      {theme && (
        <Element name="desc">
          <S.Layout>
            <h3 className="cafe">{theme.cafeName}</h3>
            <h2 className="room">{theme.themeName}</h2>
            <div className="description">
              {theme.description.split(/[.|!|?]\s/g).map((line) => {
                return (
                  <React.Fragment key={line}>
                    <p>{line}</p>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
            <S.Grid>
              <GridItem key="장르" name="장르" data={theme.theme} />
              <GridItem key="장치비율" name="장치비율" data={theme.barrier} />
              <GridItem key="제한시간" name="제한시간" data={theme.time} />
              <GridItem key="난이도" name="난이도" data={theme.level} />
              <GridItem key="활동성" name="활동성" data={theme.activity} />
              <GridItem key="추천인원" name="추천인원" data={theme.peopleNum} />
            </S.Grid>
          </S.Layout>
        </Element>
      )}
    </>
  );
};

export default DescSection;
