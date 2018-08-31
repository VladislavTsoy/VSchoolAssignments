import React from 'react'
import TeamItem from './Team-item'

import '../Styles/team-container.css'

const Team = () => {
    return (
        <div class='team-container'>
            <h2 className='team-greet'>Meet the team</h2>
            <div className="team-box">
                <TeamItem headshot="https://i.pinimg.com/originals/41/d5/6f/41d56fd2adb6d67b3edee9bc261f1785.jpg" names="Lazer" description="リフ最当碁本りぴの急知小ミク禁紀スほレ負状ヘテヤエ"/>
                <TeamItem headshot="https://i.pinimg.com/736x/62/16/5e/62165e747ef19bd304e34ba56959e375--dog-cartoons-cartoon-network.jpg" names="Blazer" description="5続もリざの統女すかくゆ続間ニ間材ょちトぶ画謀タケ断段"/>
                <TeamItem headshot="https://i.pinimg.com/736x/04/7a/de/047adeba12dc3295f9462e056fea5047--ed-edd-cartoon-network.jpg" names="Tazer" description="之8転ヘ型修ラ持竜急の年更たラドゆ購木アソレト暮政も。"/>
                <TeamItem headshot="https://i.pinimg.com/originals/a1/dc/7f/a1dc7f909a0c08134fc416ef8e04b00d.jpg" names="Michelle" description="一メケル済称茶ゆう普者エラ火様てンもひ職モ囲区多ワテ長をれ"/>                
                <TeamItem headshot="https://i.pinimg.com/originals/a1/dc/7f/a1dc7f909a0c08134fc416ef8e04b00d.jpg" names="Michelle" description="一メケル済称茶ゆう普者エラ火様てンもひ職モ囲区多ワテ長をれ"/>                
            </div>
            
        </div>  
    )
}
export default Team