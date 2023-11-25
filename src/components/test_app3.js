import React, { useEffect, useState } from 'react'
import {useFetch} from '../components/hook_fetch'


function SearchForm({value, onSearch = f => f}){

    const [val, setVal] = useState(value);
    const dd = (event) => {
    //    onSearch(aa); 
        setVal(event.target.value);
        //console.log('Hello ' + event.target.value)
    }

    useEffect(()=>{
    //    console.log('Use effect')
    })

    const MyChange = (a,b) => {
        //console.log(`a=${a} b=${b}`)
    }

    return(
        <>
            <input type='text' value = {val} onChange={dd}></input>
            <div >SEARCH</div>
            <button onClick={() =>  {console.log(val);onSearch(val)} }>SERCH BUTTON</button>
        </>

    )


}

//

export default function App3(){
    const [login, setLogin] = useState('malyshevdv');

    useEffect(()=>{
        //console.log('UseEffect login ' + login)
    }, [login])

    return (
        <>
            <SearchForm value={login} onSearch={setLogin} />
            <Fetch 
                login={login} 
            />
        </>
    )
    

}



function Fetch({
    login, 
    renderloading = <a>Loading....</a>, 
    renderError = (error) => (<a> Error {JSON.stringify(error, null, 2)} </a>)
}){

    const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)

    if (loading) return renderloading
    if (error) return renderError(error) 
    if (data) return (<UserInfo data = {data} />)
    else return (<a>no data</a>)
}

function UserInfo({data}){
    return (
    <div className="githubUser">22222
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>



)}
