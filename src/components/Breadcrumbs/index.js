import React, { Component } from "react";
import { BreadcrumbsList, BreadcrumbsItem, BreadcrumbsLink } from "./style";

export default class Breadcrumbs extends Component {
  render() {
    const { crumbs } = this.props;

    return (
      <BreadcrumbsList>
        {crumbs.map(({ title, link }, index) => {
          return (
            <BreadcrumbsItem key={index}>
              <BreadcrumbsLink to={link}>{title}</BreadcrumbsLink>
            </BreadcrumbsItem>
          );
        })}
      </BreadcrumbsList>
    );
  }
}
