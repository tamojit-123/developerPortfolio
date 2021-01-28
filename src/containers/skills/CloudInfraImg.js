import React, { Component } from "react";
import Cloud from "../../assets/lottie/cloud";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <DisplayLottie animationData={Cloud} />
    );
  }
}
