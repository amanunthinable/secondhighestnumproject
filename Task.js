import React,{useState} from 'react'
import "./task.css"


const Task = () => {
    const[number,setNumber] = useState()
    const[numArr,setNumArr] = useState([])
    const[highestNum,setSecondHighestNum] = useState()


    const numbers= numArr.map((value)=>{
        return(
            <ul>
                <li>{value}</li>
            </ul>
        )
    })

const addNumber=()=>{
    setNumArr([...numArr,number])
    setSecondHighestNum(undefined)
}

const handleOnChange=(e)=>{
setNumber(parseInt(e.target.value))
}

const secHiNum=()=>{
    let iterationOver=false
    let tempArr=numArr
    while(!iterationOver){
        iterationOver= true
        tempArr && tempArr.forEach((val,index,array)=>{
            let temp
       if(array[index] > array[index+1] ){
        iterationOver= false
        temp = array[index + 1] 
        array[index + 1] =array[index]
      array[index] = temp
       }
        }) 
        setSecondHighestNum(tempArr[1])
    }
   
}


    return (
        <>
        <div style={{display:"flex"}}>
        <div className="tableBox">
            <input type="text"  placeholder="Enter Number" className="inputBox" onChange={(e)=>{handleOnChange(e)}} />
            <button className="button" onClick={addNumber} >Add Number</button>
        <button className="button" onClick={secHiNum}>Second Highest Number</button>
        {highestNum && <p style={{marginLeft:"15px"}}>Second Highest Num:{highestNum}</p> }
        {numbers}
        </div>
     
        </div>
        </>
    )
}

export default Task
