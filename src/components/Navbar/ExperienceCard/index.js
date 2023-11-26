import React from "react";
import styled from "styled-components";

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
const Logo = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    &:hover ${Document}{
        display: flex;
    }

    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;
const Desc = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`
const TechStack = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Technology = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`




const ExperienceCard = ( experience ) => {
    const exp = experience.experience;
    return <Card>
        <Top>
            <Logo src= {exp.img} />
            <Body>
                <Role>{exp.role}</Role>
                <Company>{exp.company}</Company>
                <Duration>{exp.date}</Duration>
            </Body>
        </Top>
        <Desc>{exp.desc}
        {exp?.skills &&(
            <>
            <br />
            <br/>
            <TechStack>
                <b>Tech Stack: </b>
                <ItemWrapper>
                   { exp.skills.map((items) => (
                    // eslint-disable-next-line react/jsx-key
                    <Technology>
                      • {items}
                    </Technology>
                    ))}
                </ItemWrapper>
            </TechStack>
            </>           
        )}
        </Desc>
        { exp.doc && (
        <a href = {exp.doc}> <Document src ={exp.doc}/></a>    
       )
}
    </Card>
}
export default ExperienceCard;