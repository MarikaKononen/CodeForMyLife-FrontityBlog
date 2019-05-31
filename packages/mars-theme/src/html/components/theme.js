import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Introduction from "./introduction";
import Background from '../img/metsa.png';


//background-color: #009999;


const globalStyles = css`
  body {
    margin: 0;
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: #3d5c5c;  
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Theme = ({ state }) => (
  
  <>
    
    <Head>
      <title>{state.frontity.title}</title>
      <html lang="en" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" /> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
      <link href="https://fonts.googleapis.com/css?family=Patrick+Hand|Rancho&display=swap" rel="stylesheet"/>
    </Head>
    <Global styles={globalStyles} />
    <HeadContainer>
      <Header />
    </HeadContainer>
    <IntroductionContainer>
      <Introduction />
    </IntroductionContainer>
 
    <Body>
        
      {state.source.data(state.router.path).isArchive && <List />}
      {state.source.data(state.router.path).isPostType && <Post />}
      {state.source.data(state.router.path).is404 && <Page404 />}
        
    </Body>  
 
    
      
  
  </>
);

export default connect(Theme);


const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  background-image: url(${Background});
  background-size:     cover;                  
  background-repeat:   no-repeat;
  background-position: center center;
  min-height: 450px;

  
`;

const Body = styled.div`
  background-color: #e0ebeb;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 20px;
  border-top: 15px solid #3d5c5c;
  margin: 0 auto;
  font-family: 'Patrick Hand', cursive;

`;

const IntroductionContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color:  #e0ebeb
  ;
`;

