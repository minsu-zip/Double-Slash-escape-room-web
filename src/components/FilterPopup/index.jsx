import React, { useCallback, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsX } from "react-icons/bs";

// action
import { filterPopupStatus } from "../../store/actions/themeAction";
import { SUBMIT_FILTERING_REQUEST } from "../../store/actions/filterAction";

// component
import FilterAccordion from "./FilterAccordion";

// style
import * as S from "./style";

const dummy = [
  {
    name: "관심지역",
    buttons: ["서울", "홍대", "강남", "건대"],
  },
  {
    name: "난이도",
    buttons: ["하", "중", "상"],
  },
];

const FilterPopUp = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  // 필터링 팝업창 출력 상태
  const status = useSelector((state) => state.filter.printFilterPopup);
  // 클릭한 체크박스 리스트
  const clickedList = useSelector((state) => state.filter.clickedList);
  //
  const filteringResult = useSelector((state) => state.filter.filteringResult);
  // 필터링 성공여부 판단
  const filteringSuccess = useSelector(
    (state) => state.filter.filteringSuccess
  );

  // 닫기 버튼 클릭 시 팝업창 사라짐
  const hideFilterPopup = useCallback(() => {
    dispatch(filterPopupStatus());
  }, [dispatch]);

  // 전송 버튼 클릭 시 체크했던 필터링 전송
  const submitFiltering = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({
        type: SUBMIT_FILTERING_REQUEST,
        data: clickedList,
      });
    },
    [clickedList, dispatch]
  );

  // 필터링 결과를 정상적으로 받으면 페이지 이동
  useEffect(() => {
    if (filteringSuccess) history.push("/theme/result");
  }, [filteringSuccess, history]);

  return (
    <>
      {status && (
        <S.Form onSubmit={submitFiltering}>
          <S.PopupHeader>
            <h2>테마별 검색</h2>
            <div>
              <BsX onClick={hideFilterPopup} />
            </div>
          </S.PopupHeader>
          <S.AccordionWrapper>
            {dummy.map((value) => {
              const { name, buttons } = value;
              return (
                <FilterAccordion key={name} name={name} buttons={buttons} />
              );
            })}
          </S.AccordionWrapper>
          <S.SubmitButtonWrapper block={clickedList}>
            <div className="positioner">
              <button>전송</button>
              <div className="block">
                <span>{filteringResult || "전송"}</span>
              </div>
            </div>
          </S.SubmitButtonWrapper>
        </S.Form>
      )}
    </>
  );
};

export default FilterPopUp;
