import React, { useState } from 'react';
import { Button, Modal,ConfigProvider } from 'antd';
import TextField from '@mui/material/TextField';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import SocialIcon from './SocialIcon';
import naverImage from '../public/naver_logo.webp'
import kktImage from '../public/KakaoTalk_logo.svg'
import googleImage from '../public/Google__G__Logo.svg.webp'


const LoginModal: React.FC = () => {
    const [size, setSize] = useState<SizeType>('large');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        로그인
      </Button>
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer>
        <div style={{padding:'10px'}}>
            <h1 style={{textAlign:'center',padding:'30px 10px 30px 10px',color:'#3ADF00',fontSize:'2rem'}}>Logo</h1>
            <h4 style={{textAlign:'center',fontSize:'1rem'}}>로그인</h4> 
            <div>
                <TextField style={{margin:'10px',borderBottom:'#3ADF00 1px solid'}} id="standard-basic" label="아이디를 입력해 주세요" variant="standard" fullWidth/>
                <TextField style={{margin:'10px',borderBottom:'#3ADF00 1px solid'}} id="standard-basic" label="비밀번호를 입력해 주세요" variant="standard" fullWidth/>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',fontSize:'0.6rem',color:'#3ADF00'}}>
                <div>아이디를 잃어버리셨나요</div>    
                <div>비밀번호를 잃어버리셨나요</div>    
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#3ADF00',
                    },
                }}>
                    <Button style={{margin:'10px',width:'30%'}} type="primary" shape='round'  size={size} >로그인</Button>
            </ConfigProvider>
                <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#3ADF00',
                    },
                }}>
                <Button style={{margin:'10px',width:'30%',border:'#3ADF00 1px solid',color:'#3ADF00'}} type="default" shape='round'  size={size}>회원가입</Button>

            </ConfigProvider>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',width:'50%',margin:'0 auto'}}>
                <SocialIcon logoImage={kktImage.src}/>
                <SocialIcon logoImage={naverImage.src}/>
                <SocialIcon logoImage={googleImage.src}/>
            </div>
        </div>

      </Modal>
    </>
  );
};

export default LoginModal;