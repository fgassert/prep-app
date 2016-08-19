import React from 'react';

import homepageBg from '../../../images/bg/bg-home.jpg';
import partnershipBg from '../../../images/bg/bg-partnership.jpg';
import dashboardsBg from '../../../images/bg/bg-dashboards.jpg';
import insightsBg from '../../../images/bg/bg-insights.jpg';

const bg = {
  defaults: homepageBg,
  home: homepageBg,
  partnership: partnershipBg,
  dashboards: dashboardsBg,
  insights: insightsBg
};

class Banner extends React.Component {

  getClassName() {
    let sizeClassName = `c-banner -inverse -${this.props.size || 'medium'}`;
    if (this.props.landing) {
      sizeClassName = `${sizeClassName} -landing`;
    }
    return sizeClassName;
  }

  render() {
    const styles = {
      backgroundImage: `url(${bg[this.props.bg || 'defaults']})`
    };

    return (
      <div
        className={this.getClassName()}
        style={styles}
      >
        <div className="row align-middle">
          <div className="column small-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

export default Banner;
