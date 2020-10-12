import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbsList = styled.ul`
  display: flex;
  padding: 2rem 0;
  border-bottom: 0.1rem solid var(--gray-color);
`;

export const BreadcrumbsItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-right: 5.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -3rem;
      transform: translateY(-50%);
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: var(--grey-color);
    }
  }
`;

export const BreadcrumbsLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
  transition: color 0.25s ease-in-out;
  color: var(--grey-color);

  &:hover {
    color: var(--pink-color);
  }
`;
