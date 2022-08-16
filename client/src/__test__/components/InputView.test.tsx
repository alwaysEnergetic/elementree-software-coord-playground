import React,{useState} from 'react';
import { render,fireEvent } from '@testing-library/react';
import InputView from '../../components/InputView';
import { BrowserRouter as Router} from "react-router-dom";
let getByTestId:any; 
 describe('InputView Component Tests', () => {
     beforeEach(() => {
        ({getByTestId} = render(
            <Router>  
             <InputView/>
            </Router> 
            ))
        });
  it('updates to default for minLng value correctly', () => {
    expect(getByTestId('minLng')).toHaveValue(-0.489);
   });
  
  it('updates to default for  minLat value correctly', () => {
    expect(getByTestId('minLat')).toHaveValue(151.28);
   });
  
  it('updates to default for  maxLng value correctly', () => {
    expect(getByTestId('maxLng')).toHaveValue(50.236);
   });

  it('updates to default for  minLat value correctly', () => {
    expect(getByTestId('maxLat')).toHaveValue(51.686);
   });    
}); 