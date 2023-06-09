import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommeds from './Recommeds';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore"; 
import { setMovies } from '../features/movie/MovieSlice';
import { selectUserName } from '../features/user/userSlice';



const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommeds = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const q = query(collection(db, "movies"));

    onSnapshot(q, (snapshot) => {
             snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case 'recommend':
              recommeds  = [...recommeds, {id: doc.id, ...doc.data()}];
              break;
              case 'new':
              newDisneys =  [...newDisneys,{id: doc.id, ...doc.data()}];
              break;
              case 'original':
              originals = [...originals, {id: doc.id, ...doc.data()}];
              break;
              case 'trending':
              trending = [...trending, {id: doc.id, ...doc.data()}];
              break;
          
            default:
              break;
          }
      });
      
      dispatch(setMovies ({
        recommend: recommeds,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      }));
    });

  }, [userName])
  

  return (
    <Container>
        <ImgSlider />
       <Viewers />
       <Recommeds />
       <NewDisney />
       <Originals />
       <Trending />
    </Container>
    
  )
}


const Container = styled.main`
position: relative;
min-heigth: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after {
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`
export default Home
