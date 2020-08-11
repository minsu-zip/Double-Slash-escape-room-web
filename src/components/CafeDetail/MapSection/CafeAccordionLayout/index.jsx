import React, { useCallback, useState } from "react";
import { BsChevronCompactUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

// component
import CafeAccordion from "../CafeAccordion";

// style
import * as S from "./style";

const CafeAccordionLayout = ({ data }) => {
  const [openBtn, setOpenBtn] = useState(false);

  // 열기 버튼 클릭
  const openAcoordionBtn = useCallback(() => {
    setOpenBtn((prev) => !prev);
  }, []);

  return (
    <>
      <S.Layout>
        <S.TitleContainer>
          <h2>{data.cafeName}</h2>
          <S.ButtonBoreder onClick={openAcoordionBtn}>
            {openBtn ? <BsChevronDown /> : <BsChevronCompactUp />}
          </S.ButtonBoreder>
        </S.TitleContainer>
        {openBtn && <CafeAccordion data={data} />}
      </S.Layout>
    </>
  );
};

export default CafeAccordionLayout;
