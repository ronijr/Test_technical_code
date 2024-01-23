/** Core */
import { useState } from 'react';

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";


/** Components */
import { Container, Box, Stack , Button, TextField, Typography } from '@mui/material';

/** Utils */

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [numberValue, setNumberValue] = useState('');
  const [error, setError]             = useState('');
  const [result, setResult]           = useState(null);

  const numberRegex = /^\d+$/;


  const validation = () => {
       if(!numberValue || numberValue == 0) {
          setError({status:500,message:'Inputan harus disi'});
          return false
       } else  if(!numberRegex.test(numberValue)) {
          setError({status:500,message:'Inputan harus angka'});
          return false
       } else {
          setError({status:200,message:'Success'});
       }

       return true;
  }


  const generateSegitiga = () => {
      if(validation()) {
          let number = "";
          let result = "";
          for(var i = 0; i < numberValue.length; i++) {
              number += '0';
              console.log();
              result += numberValue[i]+number+'<br/>';
          }

          setResult(result);
      }
  }

  const generateBilanganGanjil = () => {
     if(validation()) {
        let result = "";
        for(var i=0; i < numberValue; i++) {
          if(i % 2 || i == 0) {
             result += `${i}\r`;
          }
        }
        setResult(result);
     }
  }
  /** 2 3 5 7 11 13 17 19 23 */
  /** Testing Failed */
  const generateBilanganPrima = () => {
    if(validation()) {
        let result = "";
        let pembagi = 0;
        for(var i = 1; i < numberValue; i++) {
           if(numberValue%i == 0) {
             pembagi ++;
           }
        }
        if(pembagi == 2) {
          result = pembagi+"<br/>";
        } else {

        }

        setResult(result);
    }
  }

  //** Correct */
  const generateBilanganPrima2 = () => {
    if(validation()) {
        let result = "";
        let pembagi = 0;
        for(var i = 1; i <= numberValue; i++) {
           if(numberValue % i == 0) {
             pembagi++;
           
           }
         
        }
       
        if(pembagi == 2) {
          result += pembagi+"<br/>";
        } 
        setResult(result);
    }
  }

  return (
    <>
      <Head>
        <title>Test Technical Code</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Container>
           <Stack direction="column" spacing={1}>
            {error?.status == 500 ?
            <Typography variant="subtitle2" color="error">Alert : {error?.message}</Typography> : ''}
            <TextField name="number" type="text" placeholder="Input Angka" value={numberValue} 
            onChange={(e) => setNumberValue(e.currentTarget.value)}/>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={generateSegitiga}>Generate segitiga</Button>
                <Button variant="contained" onClick={generateBilanganGanjil}>Generate Bilangan Ganjil</Button>
                <Button variant="contained" onClick={generateBilanganPrima2}>Generate Bilangan Prima</Button>
              </Stack>
              <Typography variant="subtitle1">Result</Typography>
              <Box>
                  <p dangerouslySetInnerHTML={{__html:result}}/>
              </Box>
           </Stack>
        </Container>
      </Box>
    </>
  );
}
