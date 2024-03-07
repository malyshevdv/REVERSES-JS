import React from 'react'


import ClearPanel from './ClearPanel'
import CentralPanel from './CentralPanel'

import MyTestTable from './test_table'
import { Flex, Grid, View, useTheme, Button } from '@aws-amplify/ui-react';

export default function MainPanel() {
    return (

<Flex className="workplace2">


    <ClearPanel className={'leftpanel'} />

    <CentralPanel />

    <ClearPanel className={'rightpanel'} />
</Flex>

    
)}

/*
*/