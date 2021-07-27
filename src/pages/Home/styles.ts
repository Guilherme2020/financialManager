import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* justify-content: center; */
  background: white;
`;

export const Content = styled.View`
  align-items: center;
  display: flex;
  margin-top: 20px;
`;

export const Balance = styled.View`
  margin-top: 30px;
  width: 340px;
  /* background: red; */
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export const BalanceContent = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: center;
  height: 60px;
  /* background: blue; */
`;

export const BalanceIncome = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e3e6f5;
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;

export const BalanceSpending = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4e8e6;
  width: 35px;
  height: 30px;
  border-radius: 10px;
`;

export const BalanceView = styled.View`
  padding-left: 10px;
  display: flex;
  justify-content: center;
`;

export const BalanceText = styled.Text`
  font-size: 16px;
  color: #a9acb8;
`;

export const BalanceValue = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

export const Resume = styled.View`
  border-width: 1px;
  border-radius: 20px;
  border-color: #ddd;
  border-bottom-width: 1px;
  shadow-color: #000;

  /* shadow-offset: {width: 0, height: 2}; */
  shadow-opacity: 0.1;

  shadow-radius: 2.64px;
  elevation: 4;
  width: 340px;

  /* shadow-color: "#000";
shadowOffset: {
	width: 0,
	height: 3,
};
shadowOpacity: 0.27;
shadowRadius: 4.65;

elevation: 6, */
  /* width: 340px;
  display: flex;
  background: red;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); */

  /* box-shadow: 60px -16px teal; */
  /*   
  0.27 4.65  */
`;
