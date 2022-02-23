import React from 'react';
import { TableContainer, TableHead, TableBody, TableRow, TableCell, Table } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import '../styles.css';

import GeneratePDF from './GeneratePDF';



export default function Result() {

  const { userData, data } = useContext(multiStepContext);

  return (
    <div>
      <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <Table border='2' style={{ width: '90%', justifyContent: 'center', fontfamily: 'Courier', background: 'rgb(230, 249, 255)' }} size='small' aria-label='caption table'>
          <TableHead>
            <TableRow style={{ backgroundColor: 'rgb(102, 219, 255)', color: 'black' }}>
              <TableCell> <b>Location </b></TableCell>
              <TableCell> <b>Compiled by</b></TableCell>
              <TableCell> <b>Compiled on</b></TableCell>
              <TableCell> <b>Monitoring period</b></TableCell>
              <TableCell> <b>Good</b></TableCell>
              <TableCell> <b>Moderate</b></TableCell>
              <TableCell> <b>High</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow>
              <TableCell> {userData.values.siteName}</TableCell>
              <TableCell>{userData.values.reporter}</TableCell>
              <TableCell>{userData.values.created}</TableCell>
              <TableCell>{userData.values.from}</TableCell>

              {Object.keys(data).length > 0 ?
                <>
                  <TableCell> {data.values.good}</TableCell>
                  <TableCell> {data.values.moderate}</TableCell>
                  <TableCell> {data.values.high}</TableCell>
                </> : ''
              }

            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <br></br> <GeneratePDF />
      </div>
    </div>
  )
}
