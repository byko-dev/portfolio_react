import React from "react";
import styled from "styled-components";



const Button = styled.button`
      background: ${props => props.filled ? "#4db5ff": "none"};
      color: ${props => props.filled ? "#1F1F38FF": "#4DB5FFFF"};
      width: auto;
      height: ${props => props.size == "regular"? "50px": props.size == "small"? "35px": "60px"};
      padding-left: ${props => props.size == "regular"? "20px": props.size == "small"? "10px": "30px"};
      padding-right: ${props => props.size == "regular"? "20px": props.size == "small"? "10px": "30px"};
      transition: 1s;
      border-radius: 10px;
      border: 1px solid #4DB5FF;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
      
      &:hover{
        background: #fff;
        border-color: #fff;
        color: #1f1f38;
      }
    `

Button.defaultProps = {
    filled: true,
    size: "regular"
}

export default Button;