import React from "react";
import { Link, withRouter } from "react-router-dom";

import * as S from "./style";

const TabMenu = ({ match }) => {
  return (
    <>
      <S.Layout>
        <S.Tab url={!("info" in match.params) || match.params.info === "theme"}>
          <Link to={`/cafe/${match.params.id}/theme`}>테마</Link>
        </S.Tab>
        <S.Tab url={match.params.info === "map"}>
          <Link to={`/cafe/${match.params.id}/map`}>지도</Link>
        </S.Tab>
      </S.Layout>
    </>
  );
};

export default withRouter(TabMenu);
