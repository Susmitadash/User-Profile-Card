import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/user2.png'
export const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Susmita Dash</div>
            <div className="profile-description">
            I'm a final-year Electrical Engineering student,VSSUT,Burla deeply passionate about web development, UI/UX design, and app design. Beyond tech, I find joy in dancing, travel, and music, aiming to blend creativity and technology for exceptional digital experiences.
            </div>
            <div className="profile-button"><a href="mailto:dashsusmita671@gmail.com">Contact Me</a></div>
        </div>
    </div>
  )
}
export default UserProfileCard
