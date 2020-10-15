import React, { Component } from "react";

import { Container } from "../../styled/components";
import * as S from "./style";

export default class Breadcrumbs extends Component {
  render() {
    const { crumbs } = this.props;

    if (crumbs.length <= 1) {
      return null;
    }

    return (
      <S.Breadcrumbs>
        <Container>
          <S.BreadcrumbsList>
            {crumbs.map(({ title, path }, index) => {
              return (
                <S.BreadcrumbsItem key={index}>
                  <S.BreadcrumbsLink to={path}>{title}</S.BreadcrumbsLink>
                </S.BreadcrumbsItem>
              );
            })}
          </S.BreadcrumbsList>
        </Container>
      </S.Breadcrumbs>
    );
  }
}
