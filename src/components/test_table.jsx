
import { Flex, Grid, View, useTheme, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles

//import '@aws-amplify/ui-react/styles.css';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ThemeProvider,
    Theme,
    SwitchField
  } from '@aws-amplify/ui-react';

export default function MyTestTable() {

 return (   
<>
<SwitchField
  isDisabled={false}
  label="SwitchField"
  labelPosition="end"
/>

<Table 
title="Table" testId="small"
caption="MY TABLE"
  highlightOnHover={false}
  size="small"
>
  <TableHead>
    <TableRow>
      <TableCell as="th">Citrus</TableCell>
      <TableCell as="th">Stone Fruit</TableCell>
      <TableCell as="th">Berry</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Orange</TableCell>
      <TableCell>Nectarine</TableCell>
      <TableCell>Raspberry</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Grapefruit</TableCell>
      <TableCell>Apricot</TableCell>
      <TableCell>Blueberry</TableCell>
    </TableRow>
  </TableBody>
</Table>
</>
 )
}