import { Link } from "react-router-dom";
import styled from "styled-components";

export const Breadcrumbs = styled.section`
  border-bottom: 0.1rem solid var(--gray-color);
`;

export const BreadcrumbsList = styled.ul`
  display: flex;
  padding: 2rem 0;
`;

export const BreadcrumbsItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-right: 5.5rem;

    &::after {
      content: "/";
      position: absolute;
      top: 50%;
      right: -3rem;
      transform: translateY(-50%);
      font-size: 1.4rem;
      line-height: 1;
    }
  }

  @media (max-width: 576px) {
    &:not(:last-child) {
      margin-right: 4rem;

      &::after {
        right: -2rem;
        font-size: 1.2rem;
      }
    }
  }
`;

export const BreadcrumbsLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 600;
  transition: color 0.25s ease-in-out;
  color: var(--grey-color);

  &:hover {
    color: var(--pink-color);
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
