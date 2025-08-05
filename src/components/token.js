import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import { toWords } from 'number-to-words';
import withAuthorization from "../components/authentication";
import Navbar from '../components/Navbar';
const SellTokenForm = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [formData, setFormData] = useState({
    carTitle: '',
    carModel: '',
    customerName: '',
    customerMobile: '',
    whatsappMobile: '',
    customerAddress: '',
    customerEmail: '',
    tokenAmount: '',
    dateOfPaymentReceived:'',
    paymentMode: '',
    paymentTo: '',
    dealDoneAmount: '',
    fairMarketValue: '',
    carRegistrationNumber: '',
    loanOrCash: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
    const [tokenCount, setTokenCount] = useState(null); // State to hold the token count
    const [error, setError] = useState(null); // State to handle any errors
    const [showModal, setShowModal] = useState(false);

    const numberToWordsIndian = (num) => {
      if (num === 0) return "ZERO"; // Explicitly handle 0 case
    
      const belowTwenty = [
        "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
      ];
    
      const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
      ];
    
      const placeValues = ["", "Thousand", "Lakh", "Crore"];
    
      let parts = []; // Store number parts in words
      let place = 0;  // Index to track Thousand, Lakh, Crore
    
      while (num > 0) {
        let chunk;
        if (place === 0) {
          // First chunk is three digits
          chunk = num % 1000;
          num = Math.floor(num / 1000);
        } else {
          // After first chunk, all others are two digits
          chunk = num % 100;
          num = Math.floor(num / 100);
        }
    
        if (chunk > 0) {
          const words = convertChunk(chunk, belowTwenty, tens);
          parts.unshift(words + (placeValues[place] ? " " + placeValues[place] : ""));
        }
        place++;
      }
    
      return parts.length > 0 ? parts.join(" ").trim().toUpperCase() : "ZERO";
    }
    
    function convertChunk(num, belowTwenty, tens) {
      if (num === 0) return ""; // Ensure empty chunks don't contribute
      if (num < 20) return belowTwenty[num];
      if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + belowTwenty[num % 10] : "");
      return belowTwenty[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + convertChunk(num % 100, belowTwenty, tens) : "");
    }
  const fetchTokenCount = async () => {
    try {
      // Send a GET request to the API endpoint
      const response = await fetch('https://car-swipe-backend-production.up.railway.app/api/token/tokens/count');
  
      // Check if the response status is OK (200)
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const tokenCount = data.count; 
        // Extract the 'count' field from the response
        setTokenCount(tokenCount-27);
        console.log('Token count:', tokenCount); // Log the token count (or do something with it)
        
        // You can use the tokenCount in your UI as needed, for example:
        // document.getElementById('tokenCountDisplay').textContent = `Token Count: ${tokenCount}`;
      } else {
        console.error('Failed to fetch token count');
      }
    } catch (error) {
      console.error('Error fetching token count:', error);
    }
  };
  useEffect(() => {
    if (submissionSuccess === false) {
  fetchTokenCount();}
  
  }, [submissionSuccess]);




  const generateInvoice = () => {
    const doc = new jsPDF({
      unit: 'mm',
      format: [210, 351], // A4 width (210mm) and increased height (350mm)
    });

    // Full-width header image
    const imgWidth = 210; // A4 width in mm
    const imgHeight = 50;
    doc.addImage(
        'https://res.cloudinary.com/dztz5ltuq/image/upload/v1741759136/PdfImage_dsk0mx.png',
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
    );

    // Full-width line
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.line(0, 50, pageWidth, 50);

    // Set font to bold for REF and Date
    doc.setFont('helvetica', 'bold');
    doc.text('REF......', 8, 60);

    // Date
    const indianDate = new Date(Date.now()).toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    console.log("Today's Date (IST):", indianDate);
    
    
    doc.text(`Date: ${indianDate}`, pageWidth - 50, 60);

    // Table settings
    const margin = 20; // Left margin
    const startY = 68; // Start position for the table
    const rowHeights = [8, 37, 12, 57, 20]; // Row heights
    const colWidths = [81, 87]; // Columns for row 2 (example)

    
    
    // Example usage
     // Output: FIVE LAKH NINETY NINE THOUSAND NINE HUNDRED NINETY NINE
    
    
    // Example usage
     // Output: "FOUR LAKH NINETY NINE THOUSAND NINE HUNDRED NINETY NINE"
    const h = numberToWordsIndian(`${formData.tokenAmount}`);    

    // PAYMENT MODE
    const paymentM = 
  formData.paymentMode === "Cash" 
    ? "Cash" 
    : (formData.paymentMode === "Personal Account" || formData.paymentMode === "Company Account") 
      ? "In Account" 
      : "Unknown";


    // Data
    const tableData = [
        ['INVOICE FOR TOKEN PAYMENT'], // Row 1
        [
            `Customer Name:\n ${formData.customerName}\nCustomer Address: ${formData.customerAddress} \nMobile No: ${formData.whatsappMobile}`,
            `INVOICE No : TS${tokenCount}/2025-26\nBank Details For Payment\nBank Name: Bandhan Bank\nAccount Name: Car SwipeAccount Number: 20100019064564\nIFSC Code: BDBL0002480\nBranch: Akbarpur Branch`,
        ], // Row 2
        ['S.No', 'Description of Goods', 'REGISTRATION NO.', 'Token Amount', 'Deal Amount'], // Row 3
        ['1', `Vehicle Token Payment of - ${formData.carTitle}`, `${formData.carRegistrationNumber}`, `Rs. ${formData.tokenAmount}`,  `Rs. ${formData.dealDoneAmount}`], // Row 4
        [`Total Payment Received in Rupees:\nRUPEES ${h} ONLY`, `Total Payment Received: Rs. ${formData.tokenAmount}\nPayment Mode: ${paymentM}`], // Row 5
    ];

    let y = startY;

    // Function to draw wrapped text inside a cell
    const drawWrappedText = (text, x, y, maxWidth, lineHeight = 5, fontSize = 9, rowHeight = 8, isFirstRow = false) => {
        doc.setFontSize(fontSize); // Set font size
        const lines = doc.splitTextToSize(text, maxWidth); // Wrap text

        lines.forEach((line, index) => {
            if (isFirstRow && index === 0) {
                // Center the first line horizontally (within the maxWidth of the column)
                const horizontalCenter = x + maxWidth / 2 - doc.getTextWidth(line) / 1;

                // Center the first line vertically within the row height
                const verticalCenter = y + (rowHeight - fontSize) / 6;
                doc.setFont("helvetica", "bold"); // Use "bold" for a darker heading
                doc.setFontSize(15);
                // Draw the first line centered horizontally and vertically
                doc.text(line, horizontalCenter, verticalCenter);
            } else {
                // For all other lines, use the default Y positioning with lineHeight
                doc.text(line, x, y + index * lineHeight);
            }
        });
    };

    // Function to draw a single row
    const drawRow = (rowData, colWidths, rowHeight, isFirstRow = false) => {
        let x = margin; // Start X position
        rowData.forEach((cellText, colIndex) => {
            const colWidth = colWidths[colIndex]; // Column width
            doc.rect(x, y, colWidth, rowHeight); // Draw cell border
            drawWrappedText(cellText, x + 2, y + 5, colWidth - 4, 5, 9, rowHeight, isFirstRow); // Wrap text
            x += colWidth; // Move to the next column
        });
        y += rowHeight; // Move to the next row
    };

    // Draw table rows
    drawRow(tableData[0], [168], rowHeights[0], true); // Row 1: 1 column (first row centered)
    drawRow(tableData[1], colWidths, rowHeights[1]); // Row 2: 2 columns
    drawRow(tableData[2], [20, 61, 29, 29, 29], rowHeights[2]); // Row 3: 5 columns
    drawRow(tableData[3], [20, 61, 29, 29, 29], rowHeights[3]); // Row 4: 5 columns
    drawRow(tableData[4], colWidths, rowHeights[4]); // Row 5: 2 columns

    doc.text(`For Car Swipe` ,  pageWidth - 50, 207);
    doc.text(`Place of Supply: Uttar Pradesh`, 8, 210);

    const imgWidth1 = 40; // A4 width in mm
    const imgHeight1 = 20;
    doc.addImage(
        'https://res.cloudinary.com/dztz5ltuq/image/upload/v1734425018/WhatsApp_Image_2024-12-17_at_14.05.25_785b0425-removebg-preview_f8eoli.png',
        'PNG',
        pageWidth - 40,
        210,
        imgWidth1,
        imgHeight1
    );
    doc.addImage(
        'https://res.cloudinary.com/dztz5ltuq/image/upload/v1734425018/WhatsApp_Image_2024-12-17_at_14.05.25_fded720a-removebg-preview_gnew8h.png',
        'PNG',
        pageWidth - 80,
        210,
        imgWidth1,
        imgHeight1
    );

    doc.text(`Proprietor`, pageWidth - 40, 235);
    doc.line(0, 238, pageWidth, 238);
    doc.setFont("helvetica", "bold"); // Use "bold" for a darker heading
    doc.setFontSize(15); // Adjust the size for a heading style

    // Add the text with a bold style
    doc.text('Terms and Conditions', 6, 244);
    doc.setFontSize(10);
    doc.text('1. Non-Refundable: By providing the token, the buyer agrees to purchase the vehicle,and the token is partially refundable,\n     with deductions applied as per the cancellation point stated below, under any circumstances.', 5, 250);
    doc.text('2. Validity: The token is valid for 15 days from this invoice date or In case of a loan, it is valid up to 7 days from the date\n    You got final loan approval from loan Company.', 5, 259);
    doc.text('3. Adjustment: The token will be adjusted against the final payment.', 5, 269);
    doc.text('4. Cancellation: \n\n i. If Deal is canceled by the buyer (for a valid token): Rs.10,000 will be deducted from the token amount,and the remaining\n    will be refunded. If the token amount is less than Rs.10,000, the entire token will be forfeited.\n\n ii. If Deal is canceled by the buyer (for a invalid token): Rs.20,000 will be deducted from the token amount, and the\n     remaining will be refunded. If the token amount is less than Rs.20,000, the entire token will be forfeited.\n\niii. If the Deal is canceled by the Car SwipeThe full token amount will be refunded. ', 5, 275);
    doc.text('5. Jurisdiction: Any disputes shall be subject to the jurisdiction of the courts located in Ambedkar Nagar district, Uttar Pradesh.', 5, 314);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 149, 237);
    doc.text('This is a system-generated invoice, e signed and approved for authenticity. For any inquiries or support, you can reach us via\nour website at https://www.carswipe.in/ or email at support@carswipe.in.', 3, 346);

    // Open PDF in a new tab
   //var blobUrl = doc.output('bloburl');
  
     
  //window.open(blobUrl, '_blank');
   //doc.save();
   const pdfBlob = doc.output("blob");
   return new File([pdfBlob], "token_invoice.pdf", { type: "application/pdf" });
};

  //count invoice from backend
  // Function to fetch token count from the backend

  

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
 // e.preventDefault();
  if (loading) return;
  setLoading(true);
  try {
    // Generate the PDF file
    const pdfFile = await generateInvoice();

    // Prepare form data for multipart submission
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    // Append the PDF file
    formDataToSend.append("pdfFile", pdfFile);

    // Submit form data to the backend
    const response = await axios.post(
      'https://car-swipe-backend-production.up.railway.app/api/token/submit-token',
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Notify the user
    setSubmissionSuccess(true);

    // Optionally, reset the form
   
  } catch (error) {
    console.error('Error submitting token:', error);
    alert('Failed to submit the token application. Please try again.');
  }
  finally {
    setLoading(false); // Set loading to false after submission completes
  }
 
};

  

  return (
    <div><Navbar/><div className="container mx-auto my-10 p-5 border border-gray-300 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-5">Sell Token Form</h1>
    <form >
      <div className="relative w-full p-4 border border-blue-700 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Car Title</label>
        <input
          type="text"
          name="carTitle"
          value={formData.carTitle}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Car Model</label>
        <input
          type="text"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
     
      <div className="mb-4">
        <label className="block text-gray-700">Customer Name</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Customer Mobile</label>
        <input
          type="text"
          name="customerMobile"
          value={formData.customerMobile}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">WhatsApp Mobile</label>
        <input
          type="text"
          name="whatsappMobile"
          value={formData.whatsappMobile}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Customer Address</label>
        <input
          type="text"
          name="customerAddress"
          value={formData.customerAddress}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Customer Email (Optional)</label>
        <input
          type="email"
          name="customerEmail"
          value={formData.customerEmail}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      </div>
      <div className="relative w-full p-4 border border-red-700 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Token Amount</label>
        <input
          type="number"
          name="tokenAmount"
          value={formData.tokenAmount}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Token Amount <strong>in Words</strong> </label>
        <input
          type="text"
          name="Token Amount in Words"
          value={numberToWordsIndian(`${formData.tokenAmount}`)}
         
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700">Date of Token Received in Bank/Cash</label>
      <input
type="date"
name="dateOfPaymentReceived" // Name should match the key in your state object
value={formData.dateOfPaymentReceived} // Use formData to populate the value
onChange={handleChange} // Call the handleChange function when the date changes
className="border rounded px-2 py-1"
/></div>

      <div className="mb-4">
        <label className="block text-gray-700">Payment Mode</label>
        <select
          name="paymentMode"
          value={formData.paymentMode}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          <option value="">Select Payment Mode</option>
          <option value="Cash">Cash</option>
          <option value="Personal Account">Personal Account</option>
          <option value="Company Account">Company Account</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Payment To</label>
        <select
          name="paymentTo"
          value={formData.paymentTo}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          <option value="">Select Payment To</option>
          <option value="Piyush">Piyush</option>
          <option value="Ramesh">Ramesh</option>
          <option value="Omprakash">Omprakash</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Deal Done Amount</label>
        <input
          type="number"
          name="dealDoneAmount"
          value={formData.dealDoneAmount}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Deal Amount <strong>in Words</strong> </label>
        <input
          type="text"
          name="Token Amount in Words"
          value={numberToWordsIndian(`${formData.dealDoneAmount}`)}
         
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fair Market Value</label>
        <input
          type="number"
          name="fairMarketValue"
          value={formData.fairMarketValue}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fair Market Value <strong>in Words</strong></label>
        <input
          type="text"
          name="fairMarketValueinwords"
          value={numberToWordsIndian(`${formData.fairMarketValue}`)}
          
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      </div>
      <div className="relative w-full p-4 border border-green-700 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Car Registration Number</label>
        <input
          type="text"
          name="carRegistrationNumber"
          value={formData.carRegistrationNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Loan or Cash</label>
        <select
          name="loanOrCash"
          value={formData.loanOrCash}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          <option value="">Select Loan or Cash</option>
          <option value="Loan">Loan</option>
          <option value="Cash">Cash</option>
        </select>
      </div>
      </div>
      
      
      
      <div>
      <button  onClick={() => setShowModal(true)}
        type="button"
        className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-5"
      >
       Preview Form
      </button>
      
    </div>
    </form>
    {submissionSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-xl font-semibold text-green-600">Token Form Submitted Successfully!</h2>
            <p className="mt-2 text-gray-700">THANK YOU.</p>
            <button
              onClick={() => setSubmissionSuccess(false)}
              className="mt-4 px-6 py-2 bg-blue-500 text
              white rounded-lg hover:bg-blue-600 transition"
            >
            Close
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[95%] max-w-3xl p-6 rounded-2xl shadow-2xl overflow-y-auto max-h-[95vh] border border-black relative">
      
            {/* Header with title and edit button */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Form Preview</h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
              >
                Edit Form
              </button>
            </div>
      
            {/* Data Section */}
            <div className="space-y-4 text-md text-gray-800">
              <p><strong>Car Title :</strong> {formData.carTitle}</p>
              <p><strong>Car Model :</strong> {formData.carModel}</p>
              <p><strong>Customer Name :</strong> {formData.customerName}</p>
              <p><strong>Customer Mobile :</strong> {formData.customerMobile}</p>
              <p><strong>Whatsapp Mobile :</strong> {formData.whatsappMobile}</p>
              <p><strong>Customer Address :</strong> {formData.customerAddress}</p>
              <p><strong>Customer Email :</strong> {formData.customerEmail}</p>
              <p><strong>Token Amount :</strong> ₹{formData.tokenAmount}</p>
              <p className="text-indigo-600 font-medium">
                <strong className="text-gray-800">Token Amount in Words :</strong>{' '} {numberToWordsIndian(`${formData.tokenAmount}`)}
              </p>
              <p><strong>Payment Mode :</strong> {formData.paymentMode}</p>
              <p><strong>Payment To :</strong> {formData.paymentTo}</p>
              <p><strong>Deal Done Amount :</strong> ₹{formData.dealDoneAmount}</p>
              <p className="text-indigo-600 font-medium">
              <strong className="text-gray-800">Deal Done Amount in Words :</strong>{' '}
              {numberToWordsIndian(`${formData.dealDoneAmount}`)}
            </p>
            
              <p><strong>Fair Market Value :</strong> ₹{formData.fairMarketValue}</p>
              <p className="text-indigo-600 font-medium">
                <strong className="text-gray-800">Fair Market Value in Words :</strong>{' '} {numberToWordsIndian(`${formData.fairMarketValue}`)}
              </p>
              <p><strong>Car Registration Number :</strong> {formData.carRegistrationNumber}</p>
              <p><strong>Loan or Cash :</strong> {formData.loanOrCash}</p>
              
            </div>
      
            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowModal(false);
                  handleSubmit();
                }}
                className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition"
              >
              {loading ? (
                <div className="flex flex-col items-center justify-center h-screen bg-white">
  {/* Car Animation Container */}
  <div className="relative w-28 h-28 flex items-center justify-center">
    {/* Moving Car Icon */}
    <img
      src="https://res.cloudinary.com/dztz5ltuq/image/upload/v1754381777/Screenshot__620_-removebg-preview_20250805_134123_0000_2_gbdz3h.png"
      alt="Car Logo"
      className="w-36 h-16 animate-carDrive"
    />
  </div>

  {/* Text Section */}
  <p className="mt-0 text-xl md:text-2xl font-bold text-gray-800 text-center">
   Token Form is submitting Please Wait ...
   
  </p>
 
</div>
              ) : (
                'Submit Token Form'
              )}
              </button>
            </div>
      
          </div>
        </div>
      )
      
                }

  </div></div>
  );
};

export default   withAuthorization(SellTokenForm, ["Employee"]);
