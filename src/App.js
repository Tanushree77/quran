// App.js
import React, { useState } from 'react';
import './tailwind.css'; 
import file from './Quran.pdf';
import { Document,Page,pdfjs } from 'react-pdf';
import NavbarComponent from './components/NavbarComponent';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js',import.meta.url).toString();



function App() {
  console.log(file);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    setNumPages(numPages);
  }


  return (
    <div className="App">
      <NavbarComponent />
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
       { Array.from(new Array(numPages), (i, index) => (
        <Page key={`page_${index+1}`} pageNumber={index+1} />
        ))} 
        <Page pageNumber={pageNumber} />

        
      </Document>
    </div>
  );
}

export default App;







  


