import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsX } from "react-icons/bs";

// action
import { printFilterPopup } from "../../store/actions/filterAction";
import { submitFilteringRequest } from "../../store/actions/filterAction";

// component
import FilterAccordion from "./FilterAccordion";

// style
import * as S from "./style";

// data
import filterList from "./data";

const FilterPopUp = () => {
  const dispatch = useDispatch();

  // 필터링 팝업창 출력 상태
  const status = useSelector((state) => state.filter.printFilterPopup);
  // 클릭한 체크박스 리스트
  const clickedList = useSelector((state) => state.filter.clickedList);
  // 필터링 결과
  const filteringResult = useSelector((state) => state.filter.filteringResult);

  // 닫기 버튼 클릭 시 팝업창 사라짐
  const hideFilterPopup = useCallback(() => {
    dispatch(printFilterPopup());
  }, [dispatch]);

  // 전송 버튼 클릭 시 체크했던 필터링 전송
  const submitFiltering = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(submitFilteringRequest(clickedList));
    },
    [clickedList, dispatch]
  );

  // 테마 페이지 스크롤 없애기
  useEffect(() => {
    if (status) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [status]);

  useEffect(() => {
    if (!filteringResult) return;
    dispatch(printFilterPopup());
  }, [dispatch, filteringResult]);

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
            {filterList.map((value) => {
              const { name, buttons, category } = value;
              return (
                <FilterAccordion
                  key={name}
                  category={category}
                  name={name}
                  buttons={buttons}
                />
              );
            })}
          </S.AccordionWrapper>
          <S.SubmitButtonWrapper block={clickedList}>
            <div className="positioner">
              <button>DONE</button>
              <div className="block">
                <span>전송</span>
              </div>
            </div>
          </S.SubmitButtonWrapper>
        </S.Form>
      )}
    </>
  );
};

export default FilterPopUp;
