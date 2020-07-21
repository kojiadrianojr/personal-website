import React from 'react';
import styled from 'styled-components';
import { Grid, Card, Image } from 'semantic-ui-react';

const TitleCont = styled.div`
    text-align: center;
    margin: 25px;
    padding: 30px;
    line-height: 1.6;
`
const SkillsText = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    margin: 10px;
`

const SkillsSub = styled.p`
    font-size: 2rem;
    font-weight: 100;
`


const skills = [
    {image: 'https://image.flaticon.com/icons/svg/2868/2868182.svg', header: 'Critical Thinking', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'}, 
    {image: 'https://image.flaticon.com/icons/svg/2867/2867305.svg',header: 'Teamplayer', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'}, 
    {image: 'https://image.flaticon.com/icons/svg/3050/3050442.svg',header: 'Problem Solver', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'}, 
    {image: 'https://image.flaticon.com/icons/svg/1581/1581699.svg',header: 'Positive Attitude', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'}, 
    {image: 'https://image.flaticon.com/icons/svg/2058/2058768.svg',header: 'Work Ethic', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'}, 
    {image: 'https://image.flaticon.com/icons/svg/1349/1349398.svg',header: 'Assertiveness', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'}
]



const SkillCard = ({skill}) => (
    <Card fluid style={{textAlign: 'center'}}>
        <Card.Content>
            <Image src={skill.image}  size="small" style={{margin: '10px'}} />
            <Card.Header>{skill.header}</Card.Header>
            <Card.Description>
                {skill.description}
            </Card.Description>
        </Card.Content>
    </Card>
)



export default () => {
    return (
        <React.Fragment>
            <TitleCont>
                <SkillsText>MY SKILLS</SkillsText>
                <SkillsSub>Just a summary of what I can do!</SkillsSub>
            </TitleCont>
            <Card.Group stackable style={{padding: '15px',}} centered itemsPerRow={3}>
                {skills.map( skill => (
                    <SkillCard skill={skill}/>
                ))}
            </Card.Group>
        </React.Fragment>
    )
}