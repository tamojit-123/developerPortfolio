import React, { Component } from "react";
import Project from "../../assets/lottie/project";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <DisplayLottie animationData={Project} />
    );
  }
}
