// App.js
import React, { useState } from 'react';
import './tailwind.css'; 
import { GrNext,GrPrevious } from "react-icons/gr";
import file from './Quran.pdf';
import { Document,Page,pdfjs } from 'react-pdf';
import NavbarComponent from './components/NavbarComponent';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js',import.meta.url).toString();



function App() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <div className="flex flex-col justify-items-center w-full bg-gray-50"> 
          <div className=''>
            <NavbarComponent/>
          </div>
          <div className='flex justify-between sticky'>
           <button className='text-white font-bold py-2 px-4 rounded' onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
            <GrPrevious size={20} />
          </button>
          <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          </div>
         
      
          <button className=' font-bold py-2 px-4 rounded' onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
          <GrNext size={20}/>
          </button>


          </div>
          
          <div className='flex justify-center' >
            

            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
           <Page pageNumber={pageNumber} />
           </Document>
        
        

          </div>
     
    </div>
  );
}

export default App;







  


