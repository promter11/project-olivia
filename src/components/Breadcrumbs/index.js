import React, { Component } from "react";
import { Container } from "../../styled/components";
import {
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsSection,
} from "./style";

export default class Breadcrumbs extends Component {
  render() {
    const { crumbs } = this.props;

    if (crumbs.length <= 1) {
      return null;
    }

    return (
      <BreadcrumbsSection>
        <Container>
          <BreadcrumbsList>
            {crumbs.map(({ title, path }, index) => {
              return (
                <BreadcrumbsItem key={index}>
                  <BreadcrumbsLink to={path}>{title}</BreadcrumbsLink>
                </BreadcrumbsItem>
              );
            })}
          </BreadcrumbsList>
        </Container>
      </BreadcrumbsSection>
    );
  }
}
