import React from 'react';
import {Image, Text, View} from 'react-native';
import Chart from '../../assets/chart.png';
import {Container, Content} from './styles';

const Budgets: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text style={{fontWeight: '600', color: 'white', fontSize: 25}}>
          $207,89
        </Text>
        {/* <Image source={Chart} /> */}
        <Text style={{color: 'white', marginTop: 15}}>Budget this month</Text>
      </Content>
    </Container>
  );
};

export default Budgets;
