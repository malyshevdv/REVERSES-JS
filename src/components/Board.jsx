import React , {useState, useEffect, useCallback} from 'react'
import {InvertCard, max_pictures, unsortList, pictureList} from './hooks'

export default function PoleHook() {
  
    let [dim_width, setWidth] = useState(6);
    let [dim_height, setHeight] = useState(3);
    const CurrentSize = () => ('' + dim_height + 'x' + dim_width);
    
    const [templateColumns, settemplateColumns] = useState("1fr ".repeat(dim_width));
    const [Counts, setCount] = useState(0);

    const [Steps, setStep] = useState(0)
    const [buferItems, addToBufer] = useState([], (item) => { buferItems.push(item) })

    let pictureCount = () => (Math.floor(dim_width * dim_height / 2));
    const [Finished, SetFinished] = useState(false)
    
    const getList = () => pictureList.map(
        (item, ind) => ({
            'id': ind,     // identifier
            'src': item,   //image source
            'completed': false,   //false - show card. if true - car is checked and unvisible
            'showCard': true,   // show card picture, false - show back - no picture
        }
        )
    )
    
    
    const DubleList = (myList) => [...myList, ...myList].map((item) => structuredClone(item));
    const filterList = myList => myList.filter((item, ind) => (ind + 1) <= (pictureCount()) ? true : false);

    const getfillList = () => unsortList(DubleList(filterList(getList())));  //main

    const [ItemList, SetNewItemList] = useState(getfillList());
    

    const reminesToOpen = () => ItemList.filter((item)=>(item.completed === false && item.showCard === true));
    
    const gameFinished = () => (ItemList.filter((item) => (item.completed === false)).length === 0);
    
    const CompliteList = () => ItemList.filter((item)=>(item.completed === true));
    
    const UpdateRemines = () => setCount(ItemList.length - CompliteList().length);


    const OnClickRefresh = useCallback(() => {
        SetNewItemList(getfillList());
        setStep(0);
        SetFinished(false);
        UpdateRemines();
    },[dim_width, dim_height])

    const SetupNewParam = (PanamName, newStep) => {
        if (PanamName === 'Width') {

            const newParam = dim_width + newStep;
            if ((Math.floor((newParam * dim_height) / 2) <= max_pictures) && (newParam > 0)) {
                setWidth(newParam);
                console.log(dim_width, ' ', pictureCount());
                settemplateColumns('1fr '.repeat(newParam))
            }
        }
        if (PanamName === 'Height') {
            const newParam = dim_height + newStep;
            if ((Math.floor((newParam * dim_width) / 2) <= max_pictures) && (newParam > 0)) {
                setHeight(newParam);
            }
        }
    }    


    const CardClick = (id, ItemList, Steps) => {

        let Result = false;

        if (Steps === 0) {
            for (let i = 0; i < ItemList.length; i++) {
                if (i !== id) { ItemList[i].showCard = false }
            }
            addToBufer(id);
        }
        else {
            InvertCard(id, ItemList);
        }
        Result = (reminesToOpen().length === 0);
        return Result;

    }

    //onCardClick =========================
    const onCardClick = (id) => {
        const Finished = CardClick(id, ItemList, Steps)
        const res = { 'gameFinished': gameFinished() }

        setStep(Steps + 1);

        if (res.gameFinished) {
            SetFinished(true);

        }
        UpdateRemines();
        return res;



    }


    const InvertCard = (id, ItemList) => {

        if (ItemList[id]['completed'] === false) {

            let openedListBefore = reminesToOpen(ItemList)

            if (openedListBefore.length >= 2) {
                openedListBefore.filter((item) => item.showCard === true).map((item) => item['showCard'] = false)
            }

            ItemList[id]['showCard'] = !ItemList[id]['showCard'];
            let openedListAfter = reminesToOpen(ItemList)

            if (openedListAfter.length >= 2) {
                if (openedListAfter[0].id === openedListAfter[1].id) {
                    openedListAfter.filter((item) => item.completed !== true || item.showCard !== false).map((item) => {
                        item['completed'] = true;
                        item['showCard'] = false
                        //console.log('complete ' + id)
                        return true;
                    })
                }
            }

            if (openedListAfter.length >= 3 && openedListBefore.length >= 2) {
                openedListBefore.filter((item) => item.showCard === true).map((item) => item['showCard'] = false)

            }
        }

    }



    useEffect(() => {
        OnClickRefresh(getfillList())

    }, [dim_height, dim_width]);


    return [ItemList, OnClickRefresh, getfillList, SetupNewParam, onCardClick, Steps, Counts, Finished, CurrentSize, pictureCount, templateColumns]

}