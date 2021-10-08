import React from 'react'
import Card from './Card'
import './data.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
export default function EmplyData(props) {
    return (
        <div  >

      
        <Droppable droppableId={props.columnId} direction='horizontal'>
            {(provided) => (
                <div className='employ_card' ref={provided.innerRef}   
                {...provided.droppableProps}>
                   
                    {
                        props.persons.map((person,index) => {
                            
                            return(
                            
                            <Card person={person} index={index} key={person.id} />
                        )}
                        )
                    }
                    {provided.placeholder}
                </div>


            )}

        </Droppable>
        </div>
    )
}
