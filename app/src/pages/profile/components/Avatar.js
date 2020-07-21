import React from 'react';
import styled from 'styled-components';
import { Divider, Grid, Icon } from 'semantic-ui-react';

const Avatar = styled.img`
    width: 20%;
    border-radius: 50%;
    margin: 20px;
`
const Container = styled.div`
    display: flex;
    min-width: 50%;
    color: white;
    font-size: 1.5em;
    margin-left: 30px;
`

export default () => (
    <Container>
        <Avatar 
        alt="user profile"
        src="https://i.pinimg.com/originals/d2/4b/d7/d24bd7e0b69062d9ef994f1d3a6a661f.jpg"
        />
        <div style={{width: '100%', padding: '10px'}}>
            <h1>Koji Adriano Jr.</h1>
            <Divider />
                {/* <List.Item icon="computer" content="Software Developer"/>
                <List.Item icon="map marker alternate" content="Philippines" />
                <List.Item icon="mail" content="rolando.koji98@gmail.com"/>
                <List.Item icon="phone square" content="+63-905-243-1235" /> */}
            <Grid padded columns='two' style={{marginLeft: '25px', width: '95%'}}>
                <Grid.Row>
                    <Grid.Column>
                        <Icon name="computer" />
                        Software Developer
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name="mail" />
                        rolando.koji98@gmail.com
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Icon name="map marker alternate" />
                        Philippines
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name="phone square" />
                        (+63)-905-243-1235
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    </Container>
)
