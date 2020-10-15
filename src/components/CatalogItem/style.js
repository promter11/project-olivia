import styled from "styled-components";

export const CatalogItem = styled.section``;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0;

  &:first-child {
    justify-content: space-between;
  }
`;

export const Block = styled.div`
  width: 50%;

  &:not(:last-child) {
    padding-right: 3rem;
  }
`;

export const Image = styled.img`
  min-height: 54rem;
  object-fit: cover;
  cursor: zoom-in;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Article = styled.span`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 300;
  color: var(--gray-color);
`;

export const Active = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--green-color);
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const ListItemTitle = styled.h4`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  border-bottom: 0.1rem solid var(--lightgray-color);
`;

export const VolumeList = styled.ul`
  display: flex;
`;

export const VolumeListItem = styled.li`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  border: 0.1rem solid var(--gray-color);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  background-color: transparent;
  color: var(--grey-color);

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    border-color: var(--grey-color);
    background-color: var(--grey-color);
    color: var(--white-color);
  }
`;

export const PriceList = styled.ul`
  display: flex;
  margin-bottom: 3rem;
`;

export const PriceListItem = styled.li`
  text-decoration: ${(props) => (props.discount ? "line-through" : "normal")};
  margin-right: 3rem;
  color: ${(props) =>
    props.discount ? "var(--gray-color)" : "var(--grey-color)"};
`;

export const PriceTitle = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
`;

export const PriceText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 300;
`;

export const Button = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem 3rem;
  background-color: var(--grey-color);
  color: var(--white-color);
`;
