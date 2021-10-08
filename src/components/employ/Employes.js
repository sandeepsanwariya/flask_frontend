import React,{useState} from 'react'
import './employ.css'
import { DragDropContext,Droppable } from 'react-beautiful-dnd'
import EmplyData from './EmplyData'
    var Data = {
        person:{
           "person-1":{name:'Sandeep',title:"engineer",id:"person-1"},
           "person-2":{name:'Vivek',title:"singer",id:"person-2"},
           "person-3":{name:'Logo',title:"science",id:"person-3"},
           "person-4":{name:'Sam',title:"engineer",id:"person-4"},
           "person-5":{name:'PK',title:"player",id:"person-5"},
           "person-6":{name:'dk',title:"dancer",id:"person-6"}
        },
        columns:{
            'column-1':{
                'id':"column-1",
                title:"to do",
                personId:['person-1','person-2','person-3']
            },
            'column-2':{
                'id':"column-2",
                title:"to do",
                personId:['person-4','person-5','person-6',]
            },
         
           
        },
        columnorder:['column-1','column-2',]
    }
var Dt =[
       {name:'Sandeep',title:"engineer", salery:1202, id:"person-1"},
       {name:'Vivek',title:"singer", salery:122,id:"person-2"},
       {name:'Logo',title:"science", salery:12019,id:"person-3"},
       {name:'Sam',title:"engineer", salery:12,id:"person-4"},
       {name:'PK',title:"player", salery:12022,id:"person-5"},
       {name:'dk',title:"dancer", salery:345,id:"person-6"},
    //    {name:'wk',title:"dancer", salery:35,id:"person-7"}
  
]

export default function Employes() {
    var bat={persons:{},columns:{},columnorder:[]}
    const [state, setState] = useState(Data)
    React.useEffect(() => {

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
            bat.persons[`${Dt[i*3].id}`]=Dt[i*3]
            bat.persons[`${Dt[i*3+1].id}`]=Dt[i*3+1]
            bat.persons[`${Dt[i*3+2].id}`]=Dt[i*3+2]
            
          }
          
        if((data_length%3)!==0){
            bat.columnorder.push('column-'+Math.floor(data_length/3))
            bat.columns['column-'+Math.floor(data_length/3)]={
                id:'column-'+Math.floor(data_length/3),
                title:'column-'+Math.floor(data_length/3),
                personId:[]
            }
            for (let i = 0; i <(data_length%3) ;i++) {
                bat.columns['column-'+Math.floor(data_length/3)].personId.push('aka')
                bat.persons[`${Dt[Math.floor(data_length/3)*3+i].id}`]=Dt[Math.floor(data_length/3)*3+i]
              }
            
        }
        
        // setState(bat)
        console.log('bat',bat,state)
       
      
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
    }else{

        const startPerIds=Array.from(start.personId)
        startPerIds.splice(source.index,1)
        startPerIds.splice(0,0,state.columns[destination.droppableId].personId[state.columns[destination.droppableId].personId.length-1])
       
        // console.log( 'startpd',startPerIds)
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
        console.log('test',state.columns[source.droppableId].personId.length-1)
        finishPersonIds.splice(state.columns[source.droppableId].personId.length,1);
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
        console.log('new',newState)
        setState(newState)
        
    }
    
   }
    return (
        <div className='employ'>

            <div className='sort_options'>
                <div>
                    BY NAME
                </div>
                <div>
                    BY QUALITY
                </div>
                <div>
                    BY UPH
                </div>
                <div>
                    BY WS
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
