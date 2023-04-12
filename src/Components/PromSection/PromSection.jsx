import React from 'react';
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Model/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.7} />
      </>
    );
  };

const animation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 50% 100%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBox = styled(Box)({
    background: 'linear-gradient(315deg, #e7fbf3 0%, #b6a2d8 100%)',
    backgroundSize : '400% 400%',
    animation: `${animation} 10s ease-in-out infinite`,
    height: '70vh',
    borderRadius: ' 10px 0 0 10px',
});

const PromSection = () => {

  return (
    <Box sx={{ 
            backgroundColor: '#fafafa', 
            borderRadius: '10px', 
            height: '70vh', 
            my:8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' 
            }}
    >
      <Grid container direction="row" justifyContent="center" alignItems="center" height={'70vh'}>
        <Grid item xs>
          <AnimatedBox>
            <div  className="globe" 
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    height: '100%',
                    width: '50vw',
                    cursor: 'grabbing',
                  }}
            >
              <Canvas shadows dpr={[1, 1]} camera={{ position: [-4, 0, 3], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                  <Model />
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate />
              </Canvas>
            </div>
          </AnimatedBox>
        </Grid>
        <Grid item xs container 
              direction="column" 
              spacing={2} 
              justifyContent="center" 
              alignItems="center"
              sx={{ p: 8 }} 
        >
          <Grid item xs>
              <Typography  variant="h2" component="div" color={'#ff3333'}>
                  <strong>New Nike Air Jordan 1</strong>
              </Typography>
          </Grid>
          <Grid item xs>
              <Typography  variant="subtitle1" component="div" color={'secondary'} sx={{ textAlign: 'center' }}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Typography>
          </Grid>
          <Grid item  xs>
            <Button 
                variant="outlined" 
                size="large" 
                color = 'secondary'
                sx={{ 
                    fontWeight: 'bold'
                    }}
                >
                    See More
            </Button>
          </Grid>
        </Grid> 
      </Grid>
    </Box>
  );
}

export default PromSection;