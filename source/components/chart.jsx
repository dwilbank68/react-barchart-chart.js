import React, {Component, PropTypes} from 'react';
import ChartJS from 'chart.js';

// ChartJS.defaults.global.defaultFontSize = 20;

class Chart extends Component {

    componentDidMount() {
        this.createChart();
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        this.killChart();
        this.createChart();
    }

    componentWillUnmount() {
        this.killChart();
    }

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         'whatever':{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    createChart(){
        const ctx = this
                        .refs['chart']
                        .getContext('2d');
        let {type, data, options} = this.props;
        this.chart = new ChartJS(ctx, {
            type, data, options
        });
    }

    killChart(){
        this.chart && this.chart.destroy();
    }

    render() {
        return (
            <canvas className="chart"
                    ref="chart"
                    width={this.props.width}
                    height={this.props.height}/>
        );
    }
}

export default Chart;