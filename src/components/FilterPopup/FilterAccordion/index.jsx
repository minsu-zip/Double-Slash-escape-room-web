import React, { memo, useCallback, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

// component
import FilterButton from "../FilterButton";

// style
import * as S from "./style";

const FilterAccordion = ({ name, buttons, category }) => {
  const [hide, setHide] = useState(false);

  const clickShowButton = useCallback(() => {
    setHide((prev) => !prev);
  }, []);

  return (
    <>
      <S.Container>
        <S.AccordionWrapper>
          <h4>{name}</h4>
          <div>
            {hide ? (
              <BsFillCaretUpFill onClick={clickShowButton} />
            ) : (
              <BsFillCaretDownFill onClick={clickShowButton} />
            )}
          </div>
        </S.AccordionWrapper>
        {hide && (
          <S.ButtonsWrapper>
            {buttons.map((button) => (
              <FilterButton key={button} name={button} category={category} />
            ))}
          </S.ButtonsWrapper>
        )}
      </S.Container>
    </>
  );
};

export default memo(FilterAccordion);
