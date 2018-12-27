import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from "react-native";

import { LineChart, BarChart } from "react-native-charts-wrapper";

const colors = {
  main: "#498440"
};

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        dataSets: [
          {
            values: [
              { y: 8 },
              { y: 7.5 },
              { y: 7.8 },
              { y: 7.99 },
              { y: 7 },
              { y: 8 },
              { y: 7.6 },
              { y: 8 },
              { y: 7.8 },
              { y: 7.5 },
              { y: 7.9 },
              { y: 7.8 },
              { y: -10 }
            ],
            label: "Bar dataSet",
            config: {
              color: processColor(colors.main),
              drawValues: false
            }
          }
        ],

        config: {
          barWidth: 0.7
        }
      },
      yAxis: {
        left: {
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
          zeroLine: {
            enabled: true,
            lineWidth: 1.5
          }
        },
        right: {
          enabled: false
        }
      }
    };
  }
  render() {
    const xAxis = {
      drawAxisLine: false,
      drawGridLines: false,
      position: "BOTTOM",

      valueFormatter: [
        "Sen 1",
        "Sel 2",
        "Rab 3",
        "Kam 4",
        "Jum 5",
        "Sab 6",
        "Min 7",
        "Sen 8",
        "Sel 9",
        "Rab 10",
        "Kam 11",
        "Jum 12",
        "Sab 13",
        "Min 14",
        "Sen 15"
      ],
      granularityEnabled: true,
      granularity: 1,
      textSize: 15
    };
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <BarChart
          legend={{ enabled: false }}
          style={styles.Chart}
          data={this.state.data}
          xAxis={xAxis}
          yAxis={this.state.yAxis}
          chartDescription={{ text: "" }}
          visibleRange={{ x: { min: 0, max: 4 } }}
          animation={{ durationX: 2000 }}
          scaleEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  Chart: {
    flex: 1
  }
});
