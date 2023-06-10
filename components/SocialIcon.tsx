import React from 'react';
import { Avatar } from 'antd';
import kktLogo from '../public/KakaoTalk_logo.svg'

interface IconProps{
    logoImage:string
}
const SocialIcon = ({logoImage}:IconProps) => (
  <Avatar
    src={logoImage}
    size={50}
  />
);

export default SocialIcon;