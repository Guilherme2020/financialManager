import React from 'react';
import {Text, View, Image} from 'react-native';
import Budgets from '../../components/Budgets';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Balance,
  BalanceContainer,
  BalanceContent,
  BalanceIncome,
  BalanceSpending,
  BalanceView,
  BalanceText,
  BalanceValue,
  Resume,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <Header />
        <Budgets />
        <Balance>
          <BalanceContainer>
            <BalanceContent>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <BalanceIncome>
                  <Icon name="arrow-up" color="#1B36E7" size={15} />
                </BalanceIncome>
              </View>

              <BalanceView>
                <BalanceText>Income</BalanceText>
                <BalanceValue>$300.00</BalanceValue>
              </BalanceView>
            </BalanceContent>
            <BalanceContent>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <BalanceSpending>
                  <Icon name="arrow-down" color="#F87557" size={15} />
                </BalanceSpending>
              </View>

              <BalanceView>
                <BalanceText>Spending</BalanceText>
                <BalanceValue>$92.11</BalanceValue>
              </BalanceView>
            </BalanceContent>
          </BalanceContainer>
        </Balance>

        <View
          style={{
            marginTop: 30,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            backgroundColor: '#FFFFFF',
            width: 340,
            borderRadius: 20,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',

              width: '90%',
              // width: 250,
              alignItems: 'center',
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                width: 80,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon color={'#1B36E7'} size={30} name="bank" />
              <View
                style={{
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Ubuntu-Regular',
                    color: '#B0B1BC',
                  }}>
                  Transfer
                </Text>
              </View>
            </View>
            <View
              style={{
                // backgroundColor: 'green',
                width: 80,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                size={40}
                style={{}}
                color={'#1B36E7'}
                name="mobile-phone"
              />
              <View
                style={
                  {
                    // marginTop: -5,
                  }
                }>
                <Text
                  style={{
                    fontFamily: 'Ubuntu-Regular',
                    color: '#B0B1BC',
                  }}>
                  Top Up
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 80,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red',
              }}>
              <Icon size={30} color={'#1B36E7'} name="money" />
              <View
                style={{
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#B0B1BC',
                  }}>
                  Payments
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Home;
