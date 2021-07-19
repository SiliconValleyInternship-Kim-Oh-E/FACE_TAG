import React , {useEffect, useState} from 'react';
import styled from 'styled-components';
import '../css/index.css';
import axios from 'axios';
import Logo from '../css/GAGA2.png';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Timeline from '../component/Timeline';
import Loading from '../component/Loading';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const Box = styled.div`
  width:100%;
  height:50%;
  border: 0px;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Text = styled.p`
  color: black;
  font-size:2em;
  margin-top:15%;
  font-family: 'Do Hyeon';
`
const Img = styled.img`
  width: 12%;
  height: 24%;
  position: absolute;
  margin: 1% 45%;
`
const Result= (props) => {
  const filename = props.location.aboutProps;
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState(null);
  const [uploadedurl, setUploadedurl] = useState('https://www.youtube.com/watch?v=lCiV4wACZ8w');  //video url
  const [controlState, setControlState] = useState(false); //video control

  // const onClick = () => {
  //   axios.post('/fileDown', filename).then(response=>{
  //   console.log(response.data);
  //   console.log(formData.data);
  //   const blob = new Blob([new ArrayBuffer(response.data)], { type: "video/mp4" });
  //   //const url = window.URL.createObjectURL(blob);
  //   setUploadedurl(URL.createObjectURL(blob));
  //   //setUploadedurl(URL.createObjectURL(response.data));
  //   //new Blob([response.data], { type: "video/mp4" })));
  //   setControlState(true);
  //   console.log(uploadedurl);
  //   })
  // }
    useEffect (() => {
      // video
      axios.post('/fileDown', filename).then(response=>{
      console.log(response.data);
      setUploadedurl(response.data);
      setControlState(true);
    });

      // character timeline
        var index = new FormData();
        axios.post('http://localhost:5000/getdb', index)
            .then(response =>{
              console.log(response.data);
              setData(response.data);
              setLoading(false);
            })
            .catch(error=>{
                console.log(error);
            })
    },[]);

    return(
        <Container>
            <Link to = "/">
            <Img src={Logo} alt = "logo" />
            </Link>
            <Box>
                <Text>동영상 인물 태깅 중...</Text>
            </Box>
             <Box>
             {loading ? <Loading/> :<ReactPlayer url={uploadedurl} height='300px' controls={controlState}/>}
            </Box> 
            {loading ? <Loading/> : <Timeline data={data}/>}
        </Container>
    )
  };

export default Result;