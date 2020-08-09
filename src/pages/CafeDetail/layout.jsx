import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import MainSection from "../../components/CafeDetail/MainSection";
import TabMenu from "../../components/CafeDetail/TabMenu";
import Fallback from "../../components/CafeDetail/Fallback";

// action
import { LOAD_CAFE_DETAIL_REQUEST } from "../../store/actions/cafeDetailAction";

// style
import * as S from "./style";

const CafeDetailLayout = ({ match: { params }, children }) => {
  const dispatch = useDispatch();
  const cafeInfo = useSelector((state) => state.cafeDetail.cafeInfo);

  useEffect(() => {
    if (!cafeInfo) {
      dispatch({
        type: LOAD_CAFE_DETAIL_REQUEST,
        data: {
          id: params.id,
        },
      });
    }
  }, [cafeInfo, dispatch, params]);

  return (
    <>
      {cafeInfo ? (
        <S.Layout>
          <S.Container>
            <MainSection data={cafeInfo} />
            <TabMenu />
          </S.Container>
          {children}
        </S.Layout>
      ) : (
        <Fallback />
      )}
    </>
  );
};

export default withRouter(CafeDetailLayout);
