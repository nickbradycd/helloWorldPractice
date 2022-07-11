import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material'
import { FormGroup } from '@mui/material';
import {FormControl} from '@mui/material'
import {FormLabel} from '@mui/material'
import {RadioGroup} from '@mui/material'
import {Radio} from '@mui/material'
import { createTheme } from '@mui/material/styles'


export default function FormControlLabelPlacement() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Nicholas Brady
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        
        <ButtonGroup variant="contained">
          <Button href="https://google.com">Google</Button>
          <Button href="https://images.google.com">Images</Button>
          <Button href="https://google.com/doodles">Doodles</Button>
        </ButtonGroup>


        <FormGroup>
          <FormControlLabel control={<Checkbox size="medium" color="secondary"  />} label="Good" />
          <FormControlLabel control={<Checkbox size="medium" color="secondary"/>} label="Bad" />
          <FormControlLabel control={<Checkbox size="medium"/>} label="Middle" />
          <FormControlLabel control={<Checkbox size="small" />} label="No Comment" />
        </FormGroup>


        <FormControl>
          <FormLabel id="demo-form-control-label-placement">Quality</FormLabel>
          <RadioGroup
           row
           aria-labelledby="demo-radio-buttons-group-label"
           
           name="radio-buttons-group"
           defaultValue="top"
          >
           <FormControlLabel 
              value= "Yes" 
              control={<Radio  
              size="large" 
              color="secondary" 
              />} 
              label="Yes" 
              labelPlacement="top" />
              
            <FormControlLabel 
              value= "No" 
              control={<Radio 
              size="large" 
              color = "secondary" />} 
              label="No" 
              labelPlacement="top" />
            <FormControlLabel 
              value= "Maybe" 
              control={<Radio 
              size="large" 
              color = "secondary" />} 
              label="Maybe" 
              labelPlacement="top" />
          </RadioGroup>
        </FormControl>
        

      </header>
    </div>
  );
}

