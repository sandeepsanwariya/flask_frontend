import React from 'react'
import './notification.css'
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router'
export default function Notification() {
 var dt = new Date();
 let  history= useHistory()
// document.getElementById('time').innerHTML=dt;
    return (
        <div className='notification'>
            <div className='notification_head'>
                <div onClick={()=>history.push('/')}>
                    HOME
                </div>
                <div onClick={()=>history.push('/chart')}>
                    Chart
                </div>
                <div onClick={()=>history.push('/employe')}>
                    Employes
                </div>
            </div>
            <div className='running_notification'>
                <span>ssss             sssssssssssssssssssss            ssssssssssss                    sssssssssss          ssssssssssssssssssssssss              ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
     </span>
       </div>
            <div className='notification_content'>
                <div className='notification_content_left'>
                    <div className='timer' id='time'>
 {dt.getUTCDate()}-{dt.getMonth()}-{dt.getFullYear()}
                    </div>
                    <div className='my_notification_box'>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled" />
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                            </div>
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled"/>
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                               
                            </div>
                            
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled" />
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                            </div>
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled"/>
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                               
                            </div>
                            
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled" />
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                            </div>
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled"/>
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                               
                            </div>
                            
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled" />
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                            </div>
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    <div className='my_notification'>
                        <div className='my_notification_part1'>
                            <Icon icon="ci:notification" />
                            <Icon icon="ant-design:delete-filled"/>
                        </div>
                        <div className='my_notification_part2'>
                            <div className='my_notification_part2_head'>
                                notification heading
                               
                            </div>
                            
                            <div className='my_notification_msg'>
                                massg of the notification connetc kdkfdhs sksh
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='input_notification'>
                        <hr/>
                        <input>
                        </input>
                        <div>
                        <Icon icon="fluent:send-24-filled" />
                        </div>

                    </div>
               
                </div>
                <div className='notification_content_right'>
                  <div className='notification_content_right_box'>
                    <div className='noti_box_head'>
hello houw are u
                    </div>
                    <div className='noti_box_msg'>
i am good sjjjs akkka akka akka akka akkka akkka akkka akkka akkka akkm akkka kkka  akkka  akka kka
                    </div>
                    <div className='noti_box_by'>
sandepp
                    </div>
                  </div>
                  <div className='notification_content_right_box'>
                    <div className='noti_box_head'>
hello houw are u
                    </div>
                    <div className='noti_box_msg'>
i am good sjjjs akkka akka akka akka akkka akkka akkka akkka akkka akkm akkka kkka  akkka  akka kka
                    </div>
                    <div className='noti_box_by'>
sandepp
                    </div>
                  </div>
                  <div className='notification_content_right_box'>
                    <div className='noti_box_head'>
hello houw are u
                    </div>
                    <div className='noti_box_msg'>
i am good sjjjs akkka akka akka akka akkka akkka akkka akkka akkka akkm akkka kkka  akkka  akka kka
                    </div>
                    <div className='noti_box_by'>
sandepp
                    </div>
                  </div>
                  <div className='notification_content_right_box'>
                    <div className='noti_box_head'>
hello houw are u
                    </div>
                    <div className='noti_box_msg'>
i am good sjjjs akkka akka akka akka akkka akkka akkka akkka akkka akkm akkka kkka  akkka  akka kka
                    </div>
                    <div className='noti_box_by'>
sandepp
                    </div>
                  </div>
                  <div className='notification_content_right_box'>
                    <div className='noti_box_head'>
hello houw are u
                    </div>
                    <div className='noti_box_msg'>
i am good sjjjs akkka akka akka akka akkka akkka akkka akkka akkka akkm akkka kkka  akkka  akka kka
                    </div>
                    <div className='noti_box_by'>
sandepp
                    </div>
                  </div>
                  <div className='notification_content_right_box'>
                    <div className='noti_box_head'>
hello houw are u
                    </div>
                    <div className='noti_box_msg'>
i am good sjjjs akkka akka akka akka akkka akkka akkka akkka akkka akkm akkka kkka  akkka  akka kka
                    </div>
                    <div className='noti_box_by'>
sandepp
                    </div>
                  </div>
                </div>


            </div>

        </div>
    )
}
