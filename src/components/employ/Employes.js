import React,{useState} from 'react'
import './employ.css'
import { useHistory } from 'react-router'
import { DragDropContext,Droppable } from 'react-beautiful-dnd'
import EmplyData from './EmplyData'
import { Icon } from '@iconify/react';
var Dt =[
       {name:'Sandeep',title:"engineer", quality:51,uph:92,ws:'azzs', id:"939393"},
       {name:'Vivek',title:"singer", quality:122,uph:91,ws:'sksks',id:"22002"},
       {name:'Logo',title:"science", quality:12019,uph:921,ws:'hksks',id:"220202"},
       {name:'Sam',title:"engineer", quality:12,uph:20,ws:'tsks',id:"202992"},
       {name:'PK',title:"player", quality:12022,uph:32,ws:'wksks',id:"292922"},
       {name:'dk',title:"dancer", quality:345,uph:76,ws:'wksks',id:"92929"},
       {name:'wk',title:"dancer", quality:35,uph:102,ws:'eksks',id:"299292"},
    //    {name:'wl',title:"dancer", salery:35,id:"person-8"}
  
]

export default function Employes() {
    var bat={person:{},columns:{},columnorder:[]}
    let  history= useHistory()
    const sortbystring=(val)=>{
        updown(val)
        var a=Dt.sort((a, b) => a[`${val}`].localeCompare(b[`${val}`]))
        filldata(a)
    }
   

    const sortbynumber=(val)=>{
        updown(val)
        var a=Dt.sort(function(a, b) {
            if (a[`${val}`] !== b[`${val}`]) {
                return a[`${val}`] - b[`${val}`]
            }
            if (a.name === b.name) {
              return 0;
            }
            return a.name > b.name ? 1 : -1;
        });
        filldata(a)
    }

    
    const filldata=(Dt)=>{
        var data_length=Dt.length
        console.log('a',Math.floor(data_length/3))
        console.log('b',(data_length%3))
        for (let i = 0; i <Math.floor(data_length/3) ;i++) {
            console.log('b',Dt[i*3].id)
            console.log('b',Dt[i*3+1].id)
            console.log('b',Dt[i*3+2].id)
            bat.columns['column-'+i]={
                id:'column-'+i,
                title:'column-'+i,
                personId:[Dt[i*3].id,Dt[i*3+1].id,Dt[i*3+2].id]
            }
            bat.columnorder.push('column-'+i)
            console.log('b',Dt[i*3+1].id)
            bat.person[`${Dt[i*3].id}`]=Dt[i*3]
            bat.person[`${Dt[i*3+1].id}`]=Dt[i*3+1]
            bat.person[`${Dt[i*3+2].id}`]=Dt[i*3+2]
            
          }
          
        if((data_length%3)!==0){
            bat.columnorder.push('column-'+Math.floor(data_length/3))
            bat.columns['column-'+Math.floor(data_length/3)]={
                id:'column-'+Math.floor(data_length/3),
                title:'column-'+Math.floor(data_length/3),
                personId:[]
            }
            for (let i = 0; i <(data_length%3) ;i++) {
                bat.columns['column-'+Math.floor(data_length/3)].personId.push(Dt[Math.floor(data_length/3)*3+i].id)
                bat.person[`${Dt[Math.floor(data_length/3)*3+i].id}`]=Dt[Math.floor(data_length/3)*3+i]
              }
            
        }
        
        setState(bat)
        console.log('bat',bat,state)
    }
    const [state, setState] = useState()
    React.useEffect(() => {
        filldata(Dt)
    
      }, []);

    
  
   const onDragEnd=(e)=>{
    console.log(e)
    const {destination,source,draggableId}=e
    if(!destination){
        return;
    }
    if(
        destination.droppableId===source.droppableId &&
        destination.droppable===source.droppable &&
        destination.index===source.index
       
    ){
        console.log( 'non',destination,source.droppableId)
        return;
    }
   
    const start=state.columns[source.droppableId]
   
    const finish =state.columns[destination.droppableId]
    console.log('start',start)
    console.log('finish',finish)
    if(start===finish){
        const newPersonIds=Array.from(start.personId)
        newPersonIds.splice(source.index,1);
        newPersonIds.splice(destination.index,0,draggableId)
        const newColumn={
            ...start,
            personId:newPersonIds
        }
        const newState={
    
            ...state,
            columns:{
                ...state.columns,
                [newColumn.id]:newColumn,
            }
            
        }
        console.log('new',newState)
        setState(newState)
        return;
    }else if(state.columns[destination.droppableId].personId.length<3){
        console.log('2nd')
        const startPerIds=Array.from(start.personId)
        startPerIds.splice(source.index,1)
        startPerIds.splice(0,0,state.columns[destination.droppableId].personId[state.columns[destination.droppableId].personId.length-1])
        console.log( 'startpd',state.columns[destination.droppableId].personId.length ,destination.index)
        console.log('start',state.columns[source.droppableId].personId.length ,source.index)
        console.log('starttt',startPerIds)
       

        const newStart={
            ...start,
            personId:startPerIds
    
        }
        console.log('fx',finish.personId)
        const finishPersonIds=Array.from(finish.personId)
        console.log('finishpd',Array.from(finish.personId))
        
        console.log('finishpd',finishPersonIds)
        
        console.log('finishpd',finishPersonIds)
        if(state.columns[destination.droppableId].personId.length===destination.index ||state.columns[destination.droppableId].personId.length <destination.index){
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index-1,1);
            
            console.log('1')
        }else if(destination.index ===0){
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index+state.columns[destination.droppableId].personId.length,1);
            console.log('2')
        }else
        if(state.columns[destination.droppableId].personId.length===1){
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index,1);
            console.log('3')
        }else{
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index+1,1);
            console.log('4')
        }
        
        console.log('test',finishPersonIds)
        
        // finishPersonIds = finishPersonIds.filter(function(e) { return e !==  })
        const newColumn={
            ...finish,
            personId:finishPersonIds
        }
        console.log('newstart',newStart)
        console.log('newfinish',newColumn)
        const newState={
    
            ...state,
            columns:{
                ...state.columns,
                [newStart.id]:newStart,
                [newColumn.id]:newColumn,
            }
            
        }
        console.log('news',newState)
        setState(newState)
    }else if(state.columns[source.droppableId].personId.length<3){
        console.log('3nd')
        const startPerIds=Array.from(start.personId)
        startPerIds.splice(source.index,1)
        startPerIds.splice(0,0,state.columns[destination.droppableId].personId[state.columns[destination.droppableId].personId.length-1])
        console.log( 'startpd',state.columns[destination.droppableId].personId.length ,destination.index)
        console.log('start',state.columns[source.droppableId].personId.length ,source.index)
        console.log('starttt',startPerIds)
       

        const newStart={
            ...start,
            personId:startPerIds
    
        }
        console.log('fx',finish.personId)
        const finishPersonIds=Array.from(finish.personId)
        console.log('finishpd',Array.from(finish.personId))
        
        console.log('finishpd',finishPersonIds)
        
        console.log('finishpd',finishPersonIds)
        if(state.columns[destination.droppableId].personId.length===destination.index ||state.columns[destination.droppableId].personId.length <destination.index){
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index-1,1);
            
            console.log('1')
        }else if(destination.index ===0){
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index+state.columns[destination.droppableId].personId.length,1);
            console.log('2')
        }else
        if(state.columns[destination.droppableId].personId.length===1){
            finishPersonIds.splice(destination.index,0,draggableId)
            finishPersonIds.splice(destination.index,1);
            console.log('3')
        }else{
            finishPersonIds.splice(2,1);
            finishPersonIds.splice(destination.index,0,draggableId)
            
            
            console.log('49',finishPersonIds)
        }
        
        console.log('test',finishPersonIds)
        
        // finishPersonIds = finishPersonIds.filter(function(e) { return e !==  })
        const newColumn={
            ...finish,
            personId:finishPersonIds
        }
        console.log('newstart',newStart)
        console.log('newfinish',newColumn)
        const newState={
    
            ...state,
            columns:{
                ...state.columns,
                [newStart.id]:newStart,
                [newColumn.id]:newColumn,
            }
            
        }
        console.log('news',newState)
        setState(newState)
    }
    else{
       
        const startPerIds=Array.from(start.personId)
        startPerIds.splice(source.index,1)
        startPerIds.splice(0,0,state.columns[destination.droppableId].personId[state.columns[destination.droppableId].personId.length-1])
       
        console.log( 'startpd',state.columns[destination.droppableId].personId.length,destination.index)
        console.log('start',state.columns[source.droppableId].personId.length,source.index)
       

        const newStart={
            ...start,
            personId:startPerIds
    
        }
        console.log('fx',finish.personId)
        const finishPersonIds=Array.from(finish.personId)
        console.log('finishpd',Array.from(finish.personId))
        
        console.log('finishpd',finishPersonIds)
        finishPersonIds.splice(destination.index,0,draggableId)
        console.log('finishpd',finishPersonIds)
        console.log('test',state.columns[source.droppableId].personId)
        finishPersonIds.splice(state.columns[source.droppableId].personId.length,1);
        // finishPersonIds = finishPersonIds.filter(function(e) { return e !==  })
        const newColumn={
            ...finish,
            personId:finishPersonIds
        }
        console.log('newstart',newStart)
        console.log('newfinish',newColumn)
        const newState={
    
            ...state,
            columns:{
                ...state.columns,
                [newStart.id]:newStart,
                [newColumn.id]:newColumn,
            }
            
        }
        console.log('newj',newState)
        setState(newState)
        
    }
    
   }
   const [selectedfilter, setselectedfilter] = useState()
   var filterTypes=['quality','name','ws','id','uph']
  const updown =(val)=>{
    for (let i = 0; i < filterTypes.length; i++) {
    if(filterTypes[i]!==val)
    document.getElementById(filterTypes[i]).style.border=''

      }
    document.getElementById(val).style.border='2px solid rgb(134, 134, 134)'
    setselectedfilter(val)
  }

    return (
        <div className='employ'>
            <div className='sort_head'>
            <div onClick={()=>history.push('/')}>
                    HOME
                </div>
                <div onClick={()=>history.push('/chart')}>
                    Chart
                </div>
                <div onClick={()=>history.push('/notification')}>
                    Notification
                </div>
            </div>
            <div className='sort_options'>
                <div style={{color:"rgb(134, 134, 134)", fontSize:"20px"}}>
                    Sort By -
                </div>
                <div id='name' onClick={()=>sortbystring('name')}>
                    BY NAME
                    <Icon rotate={0}  className='updown' icon="bi:arrow-up-circle" />
                </div>
                <div id='quality' onClick={()=>sortbynumber('quality')}>
                    BY QUALITY
                    <Icon  className='updown' icon="bi:arrow-up-circle" />
                </div>
                <div id='uph' onClick={()=>sortbynumber('uph')}>
                    BY UPH
                    <Icon  className='updown' icon="bi:arrow-up-circle"  />
                </div>
                <div id='ws' onClick={()=>sortbystring('ws')}>
                    BY WS
                    <Icon  className='updown' icon="bi:arrow-up-circle" />
                </div>
                <div id='id' onClick={()=>sortbynumber('id')}>
                    BY Id
                    <Icon  className='updown' icon="bi:arrow-up-circle" />
                </div>
            </div>
            <div className='employ_box'>
                {state?(<>
                {console.log('aaaaaaaaaaaaaaaa',state)}
       <DragDropContext onDragEnd={onDragEnd}>


       {state.columnorder.map(columnId=>{
           var column=state.columns[columnId]
           var per=column.personId.map(pId=>state.person[pId])
         console.log('per',per)
          return (<>
       
       <EmplyData columnId={columnId} persons={per} />
       
          </>
       
       
          )})}
       
       
             
       
                   </DragDropContext>
               </> ):""}
     
            </div>
            
            
        </div>
    )
}
