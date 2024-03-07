import React , {useState, useEffect, useContext} from 'react'
import { Flex, Grid, View, useTheme, Button } from '@aws-amplify/ui-react';
import {GameContext} from './hooks'

import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ThemeProvider,
    Theme,
  } from '@aws-amplify/ui-react';


  const theme = {
    name: 'table-theme',
    tokens: {
      components: {
        table: {
          row: {
            hover: {
              backgroundColor: { value: '{colors.blue.20}' },
            },
  
            striped: {
              backgroundColor: { value: '{colors.blue.10}' },
            },
          },
  
          header: {
            color: { value: '{colors.blue.80}' },
            fontSize: { value: '{fontSizes.xl}' },
          },
  
          data: {
            fontWeight: { value: '{fontWeights.semibold}' },
          },
        },
      },
    },
  };

function ResultHook(){
    const [ResultItemTable, addNewResult] = useState([]);
    
    return [ResultItemTable, addNewResult];

}

export default function ResultPanel(){
    const {Finished, Steps, CurrentSize} = useContext(GameContext);
    const [ResultItemTable, addNewResult] = ResultHook();
    

    useEffect(()=>{
        if (Finished) {
            console.log('Add new item in useEffect')
            //debugger;
            const ResItem = {
                'position': ResultItemTable.length + 1,
                'steps': Steps,
                'time': 0,
                'size': CurrentSize()}
            addNewResult([...ResultItemTable, ResItem]);
        }


    },[Finished])


return (
    <ThemeProvider theme={theme} colorMode="light">
    <Table 
        resultlines={ResultItemTable.length}
        highlightOnHover variation="striped"
    >
        <TableHead>
            <TableRow>
                <TableCell as="th">Position</TableCell>
                <TableCell as="th">Steps</TableCell>
                <TableCell as="th">Time</TableCell>
                <TableCell as="th">Size</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>

        {ResultItemTable.map((myTemp, ind)=>
            (<ResultString key = {ind} {...myTemp}
        />)
        )}

        </TableBody>

    </Table>
    </ThemeProvider>
    )
}

function ResultString({position, steps, time, size}){
    return (
        <TableRow>
            <TableCell as="th">{position}</TableCell>
            <TableCell as="th">{steps}</TableCell>
            <TableCell as="th">{time}</TableCell>
            <TableCell as="th">{size}</TableCell>
        </TableRow>
    )
}