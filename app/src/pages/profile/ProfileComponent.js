import React from 'react';
import Avatar from './components/Avatar';
import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100vh;
    background-color: orange;
`

const ProfileContainer = styled.div`
    background-color: #01A8F4;
    min-height: 20vh;
    padding: 20px;
    display: flex;
`

const SkillContainer = styled.div`
    height: 80vh;
    background-color: red;
    
`

export default function Profile(){
    return (
    <MainContainer>
        <ProfileContainer>
            <Avatar />
        </ProfileContainer>
        <SkillContainer>
            psss
        </SkillContainer>
    </MainContainer>
    )
}

