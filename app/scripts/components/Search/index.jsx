import React from 'react';

class Search extends React.Component {

  componentDidMount() {
    this.addLibrary();
    setTimeout(() => {
      this.addResultTitle();
    }, 1000);
  }

  addLibrary() {
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src =  `${document.location.protocol}//www.google.com/cse/cse.js?cx=${config.searchEngineID}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

  addResultTitle() {
    document.getElementById('gsc-i-id1').placeholder = 'Search in prepdata.org';
    // const thead = document.createElement('thead');
    // const tr = document.createElement('tr');
    // const th = document.createElement('th');
    // th.innerHTML = 'MOST POPULAR SEARCHES';
    // const tr1 = tr.appendChild(th);
    // thead.appendChild(tr1);
    // document.getElementsByClassName('gsc-completion-container')[0].appendChild(thead);
  }

  render() {
    return (
      <div className="c-search">
        <div className="viel"></div>
        <nav className="l-header-nav">
          <div className="search-container small-10">
             <div className="gcse-searchbox-only"></div>
             <svg className="close-button" title="Close search" onClick={() => this.props.toggleSearch()}>
              <path d="M11.872.559L7.347 5.084 2.788.525.525 2.788l4.56 4.559-4.526 4.525 2.196 2.197L7.28 9.543l4.56 4.559 2.262-2.263L9.543 7.28l4.526-4.525z" />
            </svg>
          </div>
        </nav>
      </div>
    );
  }

}

export default Search;


