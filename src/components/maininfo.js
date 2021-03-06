var React = require('react');

var MainInfoPanel = React.createClass({
  notify: function() {
    this.props.changeHandler(this.refs.searchCrit.value);
  },
  render: function() {
    return (
      <div className="main-info">
        <div className="input-pair">
        	<input type="text" id="main-info-search" className="main-info-search"
        	       placeholder="The weather in ..." ref="searchCrit"
        	       onChange={ this.notify } />
        </div>
        <div className="main-info-data">
	        <div className="main-info-city-name">{ this.props.city.name }</div>
	        <div className="main-info-middle">
		        <div className="main-info-img">
		          <img src={ "http://openweathermap.org/img/w/" + this.props.icon + ".png" } alt="weather_icon" className="day-info-img" />
		        </div>
		        <div className="main-info-description">{ this.props.description }</div>
		        <div className="main-info-temp">{ Math.round(this.props.today.main.temp) } °C</div>
	        </div>
	        <div className="main-info-further">
	        	<span>Wind direction: { Math.round(this.props.today.wind.deg) } degree</span>
	        	<span>Wind speed: { Math.round(this.props.today.wind.speed) } m/s</span>
	        </div>
        </div>
      </div>
    );
  }
});

module.exports = MainInfoPanel;