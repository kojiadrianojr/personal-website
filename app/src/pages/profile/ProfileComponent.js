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
<<<<<<< HEAD
    min-height: 80vh;
=======
    height: 80vh;
>>>>>>> 35d7dbd8a880f87c877222b1af1c1aca324619ef
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
<<<<<<< HEAD
=======
    
>>>>>>> 35d7dbd8a880f87c877222b1af1c1aca324619ef
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

