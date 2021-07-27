import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Nav} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              // textAlign: 'left',
              color: '#D3D4D7',
              fontSize: 16,
            }}>
            Good Morning
          </Text>
          <Text
            style={{
              lineHeight: 42,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Rio Nur Pratama
          </Text>
        </View>
        {/* <Text>Icone</Text> */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="notifications" size={27} color="#9DA0AC" />
        </View>
      </Nav>
    </Container>
  );
};

export default Header;
