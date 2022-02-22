import React from 'react';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import { Button } from '@material-ui/core';
// import image from '../Images/chart.png';

export default function GeneratePDF() {
  const { data, userData } = useContext(multiStepContext);
  const generate = () => {
    const doc = new jsPDF();
    const tableRows = [];
    const tableColumn = ['Site Name', 'Reporter', 'Created', 'From', 'Good', 'Moderate', 'High'];

    const tData = [userData.values.siteName,
    userData.values.reporter,
    userData.values.created, userData.values.from,
    data.values.good, data.values.moderate, data.values.high];
    tableRows.push(tData);
    doc.autoTable(tableColumn, tableRows, { startY: 30 });
    doc.text('Air Quality Report', 80, 15);
    doc.save('ZigReport.pdf');

    // const { image } = [{ img }
    // ]
  }



  return (
    <>
      <Button variant='contained'
        color='primary'
        onClick={() => generate()}>
        Generate PDF Report
      </Button>
    </>
  )
}
