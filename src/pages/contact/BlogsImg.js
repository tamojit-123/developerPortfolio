import React, { Component } from "react";
import Blog from "../../assets/lottie/blog";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <DisplayLottie animationData={Blog} />
    );
  }
}
