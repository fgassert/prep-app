import React from 'react';
import { Link } from 'react-router';

import metadata from 'json!../../metadata.json';
import PartnersSlider from '../../containers/PartnersSlider';
import SecondaryNav from '../../components/Navigation/SecondaryNav';
import SocialNav from '../../components/Navigation/SocialNav';
import MainNav from '../../components/Navigation/MainNav';
import Banner from '../../components/Banner';
import logoImage from '../../../images/prep-logo.png';

import SectionIntro from '../SectionIntro';
import IFrame from '../IFrame';
import LoadingSpinner from '../Loading/LoadingSpinner';

class DashboardDetail extends React.Component {

  componentWillMount() {
    if (!this.props.data) {
      this.props.getSearchResults(this.props.data)
    }
  }

  getData(key, value) {
    let data = null;
    for (let i = metadata.length - 1; i >= 0; i--) {
      if (metadata[i][key] === value) {
        data = metadata[i];
        break;
      }
    }
    return data;
  }

  getCurrentData() {
    const pathname = this.props.location.pathname;
    const currentData = this.getData('pathname', (pathname !== '/') ?
      pathname.split('/').slice(1)[0] : pathname);
    return currentData;
  }

  getContent() {
    // if (!this.props.data) {
    //   return <LoadingSpinner />;
    // }
    // const contentUrl = this.props.data.content_url;
    // let iframeUrl = contentUrl.indexOf('github.io') > -1
    //   ? `/proxy?url=${contentUrl}`
    //   : contentUrl;

    return (
      <div>
      Search
      </div>
    );
  }

  render() {
    // const currentData = this.getCurrentData();

    // const title = this.props.data ? this.props.data.title : currentData.title;

    document.title = 'Search';

    let content = this.getContent();

    return (


        <div className="l-main">

          {content}

        </div>
    );
  }
}

DashboardDetail.propTypes = {
  /**
   * Define the route path (from the router)
   */
  currentPage: React.PropTypes.string
};

export default DashboardDetail;
