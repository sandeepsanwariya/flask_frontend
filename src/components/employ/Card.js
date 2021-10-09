import React,{useState} from 'react'
import './card.css'
import { Draggable } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
export default function Card(props) {

    return (
        < Draggable  draggableId={props.person.id} index={props.index}>
            {(provided,snapshot) => (
                <div className='card'
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
                //  dg={snapshot.isDragging}
                 ref={provided.innerRef}
                //  style={{boxShadow:drag}}
                 >
                    <div className='card_left_side'>
                        <div className='card_left_side_option1'>
                        {props.person.uph} Avarage UPH
                            <hr/>
                        </div>
                        <div className='card_left_side_option2'>
                        {props.person.quality} Quality
                            <hr/>
                        </div>
                        <div className='card_left_side_option3'>
                        {props.person.ws}
                            <hr/>
                        </div>
                    </div>
                    <div className='card_right_side'>

                        <div className='card_right_side_head'>
                            {props.person.id}

                        </div>
                        <div className='card_right_side_dp'>
                            <img src='https://source.unsplash.com/random' alt='dp' />

                        </div>
                        <div className='card_right_side_name'>
                            {props.person.name}

                        </div>
                        <div className='card_right_side_title'>
                            {props.person.title}

                        </div>
                        <div className='card_right_side_option1'>
                            Massege

                        </div>
                        <div className='card_right_side_option2'>
                            Hire

                        </div>
                        <div className='card_right_side_option3'>
                            Contact

                        </div>
                    </div>

                </div>
            )}

        </ Draggable >

    )
}
