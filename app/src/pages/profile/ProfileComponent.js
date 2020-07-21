import React from 'react';
import Avatar from './components/Avatar';
import styled from 'styled-components';
import Skills from './components/Skills';

const MainContainer = styled.div`
    height: 100vh;
`

const ProfileContainer = styled.div`
    background-color: #01A8F4;
    min-height: 20vh;
    padding: 20px;
`;

const SkillContainer = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export default function Profile(){
    return (
    <MainContainer>
        <ProfileContainer>
            <Avatar />
        </ProfileContainer>
        <SkillContainer>
            <Skills />
        </SkillContainer>
    </MainContainer>
    )
}

