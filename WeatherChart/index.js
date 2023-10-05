import React from 'react';
import { View , ScrollView, Dimensions} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './style';

const WeatherChart = ({ data }) => {
  const chartData = {
    labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'], // Replace with your time labels
    datasets: [
      {
        data: data.slice(0, 12), // Slice the data array to include only the first 12 data points
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}> 
      <LineChart
        data={chartData}
        width={700}
        height={200}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: 'violet',
          backgroundGradientTo: 'lightblue',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />
      </ScrollView>
    </View>
  );
};

export default WeatherChart;
