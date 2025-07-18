import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const Vision = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', width: '100%', marginTop: '100px', marginBottom: '80px' }}>
    <Document file={process.env.PUBLIC_URL + '/uploads/vision mission values.pdf'} loading="Loading PDF...">
      <Page pageNumber={1} width={Math.min(window.innerWidth * 0.95, 900)} />
    </Document>
  </div>
);

export default Vision; 