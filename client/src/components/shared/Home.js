
import { Button } from "react-bootstrap";
import { Container, Col, Row } from 'react-bootstrap';
import { Accordion } from "react-bootstrap";
import { H1, P } from "../styles/shared";
import { ContainerMain } from '../styles/shared';
import { Img } from '../styles/shared';
import {Acc} from '../styles/shared';
import { Img2 } from '../styles/shared';
import { H2 } from '../styles/shared'



const Home = () => (
  <>
  <ContainerMain>
  <Container style={{paddingTop:'20px'}}>
  <Row>
    <Col xs><H1>Come Make a Appointment<br/> Today!</H1>
    <P>We have the best primary caregivers in variuos fields of expertise. You can 
      let us know <br />what you need, and we will pair you off with the best experts to helo you with your needs.

    </P>
    
  
    <svg style={{backgroundColor:'#64fcd9', marginRight:'6px'}} width="24" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0215 3.3434C15.5299 3.25632 16.0992 3.22724 16.6349 3.31789C17.5918 3.47977 18.4756 3.9245 19.1743 4.59126C19.631 4.60158 20.0798 4.51161 20.4769 4.38335C20.8131 4.2748 21.097 4.14373 21.2959 4.04009C21.3948 3.98856 21.4713 3.9446 21.5209 3.91484C21.5457 3.89998 21.5638 3.88874 21.5745 3.88195L21.584 3.87589C21.8808 3.67816 22.276 3.71664 22.5289 3.96815C22.7818 4.21971 22.8226 4.61463 22.6263 4.91254C22.4186 5.22783 22.1303 5.7899 21.8072 6.41966C21.7564 6.51868 21.7047 6.61937 21.6524 6.72104C21.4671 7.08101 21.2771 7.44482 21.1 7.75695C20.9888 7.95294 20.8699 8.15191 20.75 8.32385V8.59763C20.7576 9.60326 20.6423 10.6036 20.4082 11.5769C20.2609 12.1892 20.0667 12.7908 19.8264 13.3762C19.204 14.8928 18.2856 16.2703 17.1249 17.428C15.9641 18.5858 14.5844 19.5006 13.0661 20.1192C11.5492 20.7372 9.92444 21.047 8.28659 21.0305C5.91228 21.0326 3.58791 20.3485 1.59319 19.0606C1.29939 18.8709 1.17569 18.5033 1.29503 18.1746C1.41437 17.8459 1.74506 17.6433 2.09213 17.6862C2.39249 17.7234 2.6949 17.7415 2.99756 17.7405C4.08501 17.7375 5.15174 17.4972 6.12561 17.0446C5.81606 16.9037 5.52052 16.7299 5.24437 16.5251C4.43265 15.9232 3.82874 15.0833 3.51667 14.1221C3.43558 13.8724 3.49102 13.5984 3.66283 13.3998C3.66591 13.3963 3.66902 13.3927 3.67215 13.3892C3.48862 13.2256 3.3169 13.0474 3.1588 12.8558C2.44748 11.9936 2.05581 10.9121 2.05002 9.7944L2.05 9.79053L2.05001 9.74053C2.05001 9.47466 2.19077 9.22867 2.41997 9.09395C2.47807 9.05979 2.53965 9.03409 2.603 9.01685C2.26467 8.34177 2.08873 7.59632 2.09001 6.84006C2.08961 5.98329 2.31341 5.14133 2.73917 4.39782C2.86208 4.18319 3.08291 4.04295 3.32944 4.02298C3.57597 4.003 3.8165 4.10585 3.97236 4.2979C4.93491 5.48391 6.1362 6.45417 7.49819 7.14564C8.19833 7.50109 8.93288 7.77879 9.68867 7.97522C10.1124 8.08535 10.5428 8.16994 10.9776 8.22836C10.9584 7.50511 11.1013 6.78224 11.401 6.11431C11.8407 5.13448 12.5931 4.3283 13.5404 3.82221C13.9415 3.60788 14.474 3.43717 15.0215 3.3434ZM3.74329 10.8909C3.87294 11.2558 4.0658 11.5981 4.31586 11.9012C4.80718 12.4967 5.48913 12.9043 6.24635 13.0549C6.58363 13.122 6.83207 13.4099 6.84909 13.7534C6.86612 14.0969 6.64737 14.4079 6.31837 14.508C6.04588 14.591 5.7667 14.6487 5.48434 14.6808C5.67093 14.9213 5.8904 15.1368 6.13781 15.3202C6.699 15.7364 7.37594 15.9672 8.07445 15.9807C8.39137 15.9868 8.67023 16.1914 8.77106 16.492C8.87189 16.7925 8.7729 17.1239 8.5238 17.3199C7.47463 18.1455 6.26143 18.7211 4.97588 19.015C6.04136 19.3562 7.15881 19.5319 8.2891 19.5305L8.2978 19.5305C9.73786 19.5455 11.1665 19.2734 12.5002 18.73C13.8339 18.1867 15.0459 17.383 16.0656 16.366C17.0852 15.349 17.892 14.139 18.4387 12.8067C18.6498 12.2925 18.8204 11.764 18.9498 11.2261C19.1556 10.3703 19.257 9.49065 19.25 8.60639L19.25 8.60052V8.07053C19.25 7.88867 19.3161 7.71301 19.4359 7.57624C19.5052 7.4972 19.6264 7.31464 19.7954 7.01674C19.956 6.73362 20.1338 6.39371 20.3187 6.03453C20.3299 6.0128 20.3411 5.99097 20.3524 5.96903C19.8728 6.07318 19.3293 6.12777 18.7594 6.06618C18.579 6.04668 18.4117 5.96239 18.2887 5.82895C17.7858 5.28362 17.1161 4.92061 16.3847 4.79687C16.0602 4.74196 15.6678 4.75453 15.2747 4.82187C14.8476 4.89503 14.4759 5.02304 14.2472 5.14522C13.593 5.49479 13.0732 6.05163 12.7695 6.72842C12.4658 7.4052 12.3953 8.16365 12.5691 8.88481C12.6245 9.11472 12.5683 9.3573 12.4173 9.53933C12.2663 9.72136 12.0383 9.82151 11.8021 9.80957C10.9587 9.76691 10.1242 9.63826 9.31135 9.42699C8.45146 9.2035 7.61572 8.88755 6.81915 8.48314C5.64637 7.88773 4.57832 7.11063 3.65348 6.18294C3.61129 6.39855 3.58987 6.61858 3.59001 6.84003L3.59001 6.84195C3.58897 7.39267 3.72412 7.9351 3.98343 8.42095C4.24274 8.9068 4.61816 9.32099 5.07627 9.62664C5.35429 9.81214 5.47602 10.1592 5.37477 10.4777C5.27351 10.7963 4.97372 11.0093 4.63962 11.0002C4.33702 10.992 4.03696 10.9552 3.74329 10.8909Z" fill="black"/>
</svg> 
  <Button variant="outline-secondary">Call now: (123) 123-1234</Button>{' '}</Col>
    <Col xs={{ order: 12 }}><Img src= "https://images.pexels.com/photos/4386515/pexels-photo-4386515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="doctor"/></Col>
    
  </Row>

</Container>
<div style={{marginTop:'50px'}}>
  </div>
<div style={{borderBottom:'2px #ffb61d solid'}}></div>

<Container style={{paddingTop:'30px'}}>
  <Row>
    
    <Col xs={{ order: 12 }}> <Img2 src= "https://images.pexels.com/photos/4386515/pexels-photo-4386515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="doctor"/></Col>
    <Col xs><H1>Leading Industries Technologies and Advance Treatments</H1>

    <P> We have the top technological innovations in all of the tools, equipments, and facilities we have on site 
      . You can expect the fastest and best
       success rate with our care wit over 60,000 thousand locations around the world.
    </P>
    </Col>
  </Row>

  
</Container>

  
  <div style={{marginTop:'50px'}}>
  </div>
<div style={{borderBottom:'2px #ffb61d solid'}}></div>
<p style={{color:'#64fcd9', textAlign:'center',fontSize:'26px', paddingTop:'50px'}}>FAQs</p>
<Acc>
  <Accordion>
  <Accordion.Item >
    <Accordion.Header><H2>How much does it cost?</H2></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><H2>What care do you provide?</H2></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><H2>How do I make a appointment?</H2></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Acc>
<div style={{textAlign:'center', marginBottom:'70px'}}>
<p style={{color:'#64fcd9', fontSize:'20px'}}>Still have a questions?</p>
<p style={{color:'#ffb61d', fontSize:'10px'}}>Drop us a call</p>
<Button variant="outline-secondary">Call now: (123) 123-1234</Button>{' '}
</div>
  
  
  </ContainerMain>
  <br />
 

  </>
)

export default Home;