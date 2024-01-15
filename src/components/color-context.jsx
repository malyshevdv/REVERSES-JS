import React , {useState, createContext, useContext} from 'react'
import colorData from "../data/colors.json";

import { v4 } from "uuid";

export const MyContext = createContext('color');
export const useColorContext = () => useContext(MyContext);



