import React, { Component } from 'react';

import Feature from './Feature';

class Customization extends Component {
  render() {
    const features = Object.keys(this.props.state.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <Feature feature={feature} key={featureHash} state={this.props.state} updateFeature={this.props.updateFeature} />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default Customization;
