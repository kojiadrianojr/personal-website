import React from 'react';
import styled from 'styled-components';
import { Divider, Grid, Icon } from 'semantic-ui-react';
import { device } from '../../../common-components/devices';


const Avatar = styled.img`
    margin: 20px;
    justify-content: center;
    border: 5px solid white;
    $media ${device.mobileS} {
        width: 100px;
        border-radius: none;
    }
    @media ${device.tablet} {
        border-radius: 50%;
    }
    @media ${device.desktop} {
        width: 200px;
    }
`
const Container = styled.div`
    display: flex;
    min-width: 50%;
    color: white;
    margin-left: 30px;
    @media ${device.mobileS} {
        flex-direction: column;
        font-size: 1.5rem;
    }

    @media ${device.tablet} {
        flex-direction: row;
        font-size: 1.2rem;
    }

    @media ${device.laptopL} {
        max-width: 60%;
        font-size: 2rem;
    }

`

export default () => (
    <Container>
        <Avatar 
        alt="user profile"
        src="https://i.pinimg.com/originals/d2/4b/d7/d24bd7e0b69062d9ef994f1d3a6a661f.jpg"
        />
        <div >
            <h1>Koji Adriano Jr.</h1>
            <Divider />
            <Grid padded columns='two' stackable>
                <Grid.Row >
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
