import styled from "styled-components";
import { Link } from "react-router-dom";

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

  @media (max-width: 576px) {
    min-height: 32rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    min-height: 48rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 4rem;

    &:not(:first-child) {
      padding-left: 0;
    }
  }
`;

export const Image = styled.img`
  min-height: 54rem;
  transition: opacity 0.5s ease;
  object-fit: cover;
  cursor: zoom-in;

  &:hover {
    opacity: 0;
  }

  @media (max-width: 576px) {
    min-height: 32rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    min-height: 48rem;
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

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

export const Active = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${(props) =>
    props.active ? "var(--green-color)" : "var(--error-color)"};

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
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

export const VolumeForm = styled.form`
  display: flex;
`;

export const VolumeFormLabel = styled.label`
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const VolumeRadioText = styled.span`
  display: block;
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

  &:hover {
    border-color: var(--grey-color);
    background-color: var(--grey-color);
    color: var(--white-color);
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  @media (max-width: 992px) {
    padding: 1.5rem 2rem;
  }
`;

export const VolumeRadio = styled.input.attrs({
  type: "radio",
  name: "volume",
})`
  position: absolute;
  height: 0;
  visibility: hidden;

  &:checked + ${VolumeRadioText} {
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

export const Button = styled.button`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem 3rem;
  margin: 0 1.5rem 1.5rem 0;
  border: 0.1rem solid
    ${(props) =>
      props.disabled ? "var(--lightgray-color)" : "var(--grey-color)"};
  transition: all 0.25s ease;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  background-color: ${(props) =>
    props.disabled ? "var(--lightgray-color)" : "var(--grey-color)"};
  color: ${(props) =>
    props.disabled ? "var(--gray-color)" : "var(--white-color)"};

  &:hover {
    background-color: transparent;
    color: var(--grey-color);
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const OrderButton = styled(Link)`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 1.5rem 3rem;
  border: 0.1rem solid var(--gray-color);
  transition: all 0.25s ease;
  background-color: var(--catalog-item-background-color);
  color: var(--grey-color);

  &:hover {
    border: 0.1rem solid var(--grey-color);
    color: var(--grey-color);
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
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
  color: ${(props) =>
    props.active ? "var(--grey-color) !important" : "var(--grey-color)"};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0.2rem;
    transition: background-color 0.25s ease-in-out;
    background-color: ${(props) =>
      props.active ? "var(--lightgrey-color)" : "var(--lightgray-color)"};
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:hover {
    &::after {
      background-color: ${(props) =>
        props.active ? "var(--lightgrey-color)" : "var(--gray-color)"};
    }
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  @media (max-width: 992px) {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
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

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

export const SpecsItemTitle = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--gray-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const SpecsItemDesc = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--grey-color);

  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const Description = styled.p`
  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const NoteBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const NoteTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const NoteDescription = styled.p`
  @media (max-width: 576px) {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;
