import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const StyleReset = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    html,
    body,
    #root {
        width:100%;
        height:100%;
    }
    a {
        text-decoration :none;
    }
`;

export default StyleReset;
