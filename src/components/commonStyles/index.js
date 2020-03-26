import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export const Flexbox = ({
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  children
}) => (
  <Flex
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexDirection={flexDirection}
  >
    {children}
  </Flex>
);
