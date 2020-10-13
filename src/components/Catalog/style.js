import styled from "styled-components";
import Arrow from "../../assets/icons/more-arrow.svg";
import { Link } from "react-router-dom";

export const CatalogStyled = styled.section``;

export const CatalogBlock = styled.div`
  padding: 4rem 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h2`
  margin-right: 3rem;
`;

export const Count = styled.span`
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 300;
  color: var(--gray-color);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% / 3) - (6rem / 3));
  padding: 3rem;
  margin-bottom: 3rem;
  background-color: var(--catalog-item-background-color);
`;

export const ListItemBrand = styled.span`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  color: var(--white-color);
`;

export const ListItemTitle = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: var(--pink-color);
`;

export const ListItemPrice = styled.span`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
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
  font-weight: bold;
  padding-right: 3rem;
  color: var(--white-color);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(180deg);
    width: 2rem;
    height: 1rem;
    background: url(${Arrow}) no-repeat center center / cover;
  }
`;
