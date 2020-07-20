import React from 'react';
import styled from 'styled-components';
import { List, Icon, Divider } from 'semantic-ui-react';

const Avatar = styled.img`
    width: 30%;
    border-radius: 50%;
    margin: 20px;
`
const Container = styled.div`
    display: flex;
    width: 40%;
    color: white;
    font-size: 17px;
    margin-left: 30px;
`

export default () => (
    <Container>
        <Avatar 
        alt="user profile"
        src="https://i.pinimg.com/originals/d2/4b/d7/d24bd7e0b69062d9ef994f1d3a6a661f.jpg"
        />
        <div style={{width: '100%', padding: '15px'}}>
            <h1>Koji Adriano Jr.</h1>
            <Divider />
            <List animated style={{marginLeft: '35px'}}>
                <List.Item icon="computer" content="Software Developer"/>
                <List.Item icon="map marker alternate" content="Philippines" />
                <List.Item icon="mail" content="rolando.koji98@gmail.com"/>
                <List.Item icon="phone square" content="+63-905-243-1235" />
            </List>
        </div>
    </Container>
)
