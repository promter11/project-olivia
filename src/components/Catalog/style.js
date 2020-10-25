import { Link } from "react-router-dom";
import styled from "styled-components";

import Arrow from "../../assets/icons/more-arrow.svg";

export const Catalog = styled.section``;

export const CatalogBlock = styled.div`
  padding: 4rem 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h2`
  margin-right: 3rem;

  @media (max-width: 576px) {
    margin-right: 1rem;
  }
`;

export const Count = styled.span`
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 300;
  color: var(--gray-color);

  @media (max-width: 576px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
`;

export const ListItemBrand = styled.span`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  color: var(--white-color);
`;

export const ListItemTitle = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  color: var(--pink-color);
`;

export const ListItemPrice = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  color: var(--white-color);
`;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ListItemLink = styled(Link)`
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
  padding-right: 3rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  color: var(--white-color);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(180deg);
    width: 2rem;
    height: 1rem;
    transition: right 0.5s ease;
    background: url(${Arrow}) no-repeat center center / cover;
  }

  &:hover::before {
    right: -0.5rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% / 3) - (6rem / 3));
  max-height: 36rem;
  height: 100%;
  padding: 3rem;
  transition: background-color 0.25s ease-in-out;
  background-color: var(--catalog-item-background-color);
  
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
    
    ${ListItemBrand},
    ${ListItemTitle},
    ${ListItemPrice},
    ${ListItemLink} {
      opacity: 1;
      visibility: visible;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-height: 28rem;
  }
  
  @media (min-width: 768px) and (max-width: 992px) {
    width: calc((100% / 2) - (3rem / 2));
  }
`;
