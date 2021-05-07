import styled from 'styled-components';
import { Button } from '../../commons';

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  margin: 0 auto;
  width: 95%;
  height: 100%;
`;

export const OrderOptionsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  width: 63%;
  height: 100%;
`;

export const OrderListController = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled(Button)`
  justify-content: center;
  width: 7.375rem;
  height: 3.125rem;
  font-size: 1rem;
  color: #333333;
  border: 0.0625rem solid #bbbbbb;
`;

export const ListLabel = styled.div`
  font-size: 1.25rem;
`;

export const CheckoutSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 1.5rem;
  width: 37%;
  height: 100%;
`;

export const Sticky = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 15%;
  margin-top: 2.625rem;
  width: 100%;
`;
