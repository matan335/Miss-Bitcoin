import React, { Component } from 'react';
import Chart from '../../components/Chart/Chart';
import { BitcoinService } from '../../services/BitcoinService'
import './StatisticPage.css'

class StatisticPage extends Component {

  state = {
    chartsData: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const chartsData = await BitcoinService.getStatisticsData()
    this.setState({ chartsData })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);
  }

  renderChart(chart, color) {
    const { title, data, description } = chart

    return (
      <Chart title={title}
        data={data}
        description={description}
        color={color} />

    )
  }

  render() {
    if (this.state.loading) return (
      <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
    )
    const colors = ['blue', 'green']
    return (
      <div className="statistic-page">
        <ul>
          {
            this.state.chartsData.map((chart, idx) =>
              <li className="statistic-chart" key={idx}>{this.renderChart(chart, colors[idx])}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default StatisticPage;
