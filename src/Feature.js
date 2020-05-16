import React, { Component } from 'react';
import slugify from 'slugify';

import Option from './Option';

class Feature extends Component {
  render() {
    let feature = this.props.feature;

    const options = this.props.state.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Option item={item} key={itemHash} itemHash={itemHash} name={slugify(feature)} feature={feature} state={this.props.state} updateFeature={this.props.updateFeature} />
      );
    });

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Feature;
