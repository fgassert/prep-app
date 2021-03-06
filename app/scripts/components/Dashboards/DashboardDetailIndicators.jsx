import React from 'react';
import ChartCard from '../Cards/ChartCard';
import EmbedCard from '../Cards/EmbedCard';
import ShareModal from '../Modal/ShareModal';

class DashboardDetailIndicators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShare: false,
      shareUrl: '',
      shareTitle: '',
      widgetSlug: ''
    };
    this.setShareModal = this.setShareModal.bind(this);
  }

  setShareModal(url, section, widgetSlug) {
    this.setState({
      modalShare: true,
      shareUrl: url,
      shareTitle: `Share this ${section}`,
      widgetSlug
    });
  }

  render() {
    let content = [];
    if (this.props.data && this.props.data.widgets.length) {
      this.props.data.widgets.forEach((indicator, index) => {
        if (indicator.widget_type_id && indicator.widget_type_id === 2) {
          content.push(
            <div className="large-12" key={`indicator-${index}`} style={{ display: 'flex' }}>
              <EmbedCard
                tooltip
                autoHeight
                title={indicator.title}
                subtitle={indicator.subtitle}
                data={indicator}
                setShareModal={this.setShareModal}
              />
            </div>
          );
        } else {
          content.push(
            <div className="columns small-12 medium-6" key={`indicator-${index}`} style={{ display: 'flex' }}>
              <ChartCard
                tooltip
                link={`/dataset/${indicator.dataset}`}
                title={indicator.title}
                subtitle={indicator.subtitle}
                data={indicator}
                setShareModal={this.setShareModal}
              />
            </div>
          );
        }
      });
    }

    return (
      <div className="row align-stretch">
        {content}

        <ShareModal
          title={this.state.shareTitle}
          url={this.state.shareUrl}
          opened={this.state.modalShare}
          close={() => this.setState({ modalShare: false })}
          widgetSlug={this.state.widgetSlug}
        />
      </div>
    );
  }
}

DashboardDetailIndicators.propTypes = {
  /**
   * Define dashboard indicators data
   */
  data: React.PropTypes.any.isRequired,
  /**
   * Set share modal state
   */
  setShareModal: React.PropTypes.func
};

export default DashboardDetailIndicators;
