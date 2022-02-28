import React from "react";
import styled from "styled-components/native";

export const Container  = styled.SafeAreaView`
background-color: #63C2D1;
flex: 1; /*Pra ocupar todo espaço da tela */
justify-content: center;
align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;

`;