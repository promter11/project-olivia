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
  max-height: 54rem;

  &:not(:first-child) {
    padding-left: 3rem;
  }
`;

export const Image = styled.img`
  min-height: 54rem;
  transition: opacity 0.25s ease;
  object-fit: cover;
  cursor: zoom-in;

  &:hover {
    opacity: 0;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Code = styled.span`
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
  border: 0.1rem solid var(--grey-color);
  transition: all 0.25s ease;
  background-color: var(--grey-color);
  color: var(--white-color);

  &:hover {
    background-color: transparent;
    color: var(--grey-color);
  }
`;

export const Tabs = styled.ul`
  display: flex;
  margin-bottom: 3rem;
  border-bottom: 0.2rem solid var(--lightgray-color);
`;

export const TabsItem = styled.li`
  position: relative;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.25s ease-in-out;
  color: var(--grey-color);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: ${(props) =>
      props.active ? "var(--lightgrey-color)" : "var(--lightgray-color)"};
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:hover {
    color: var(--gray-color);
  }
`;

export const TabsBlock = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const SpecsList = styled.ul``;

export const SpecsDotted = styled.div`
  flex: 1;
  margin: 0 0.5rem 0.4rem 0.5rem;
  border-bottom: 0.1rem dotted var(--gray-color);
`;

export const SpecsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const SpecsItemTitle = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--gray-color);
`;

export const SpecsItemDesc = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--grey-color);
`;

export const Description = styled.p``;

export const NoteBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const NoteTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const NoteDescription = styled.p``;
