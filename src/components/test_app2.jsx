import React from 'react'
import { FixedSizeList } from "react-window";
//import {faker} from "faker";
import { faker } from '@faker-js/faker';

const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 }
   ];
   
const tahoe_peaks2 = []

const bigList = [...Array(50)].map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
   }));
   
export default function App2() {
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex" } }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} — {bigList[index].email}
            </p>
        </div>
    );

    return (
        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    );
}