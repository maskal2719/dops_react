import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>

            <Banknote color={props.money.banknotes === 'Dollars' ? 'blue' : 'green'}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>

        </>
    );
};

const Banknote = styled.div`
  /* This renders the buttons above... Edit me! */
  background-color: ${props => {
      if (props.color ===`blue`){
          return 'chartreuse'
      }else {
          return 'grey'
      }
  }};
  width: 400px;
  height: 150px;
  padding: 20px;
`
