import { useEffect } from 'react';
import { jsPDF } from 'jspdf';

const AuthorityLetterGenerator = () => {
  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297], // A4 size
    });

    const pageWidth = 210;
    const logoUrl = 'https://res.cloudinary.com/dunsl7vvf/image/upload/v1752448214/Screenshot_623_hfjv8d.png';
    const logoBase64 = await loadImageAsBase64(logoUrl);

    const imgHeight = 35;
    const imgWidth = 210;
    const date = '22 July 2025';
    const location = 'Lucknow';

    // Add Logo
    doc.addImage(logoBase64, 'PNG', 0, 0, imgWidth, imgHeight);

    // Line directly below image
    const headerBottomY = imgHeight;
    doc.setDrawColor(0); // black
    doc.setLineWidth(0.5);
    doc.line(0, headerBottomY, pageWidth, headerBottomY);

    // Title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('AUTHORITY LETTER', pageWidth / 2, headerBottomY + 15, { align: 'center' });

    // Date and Place
    const metaY = headerBottomY + 28;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${date}`, 10, metaY);
  

    // Body Content
    const bodyY = metaY + 10;
    const body = `
TO WHOMSOEVER IT MAY CONCERN

This is to certify that Mr. Omprakash, a representative of Car Swipe Services Private Limited, is hereby fully authorized to act on behalf of the company in relation to the pickup and transaction of the following vehicle:

- Vehicle Registration Number: UP32LR6592
- Registered Owner: Mr. Amit Kumar Saini
- Location: Lucknow

Mr. Omprakash is granted full authority to:

1. Inspect and physically collect the aforementioned vehicle from the seller.

2. Make or collect payments related to the vehicle on behalf of Car Swipe Services Private Limited.

3. Sign any invoices, receipts, delivery notes, or vehicle sale agreements required to complete the transaction.

4. Submit and collect any documents necessary to fulfill the vehicle transfer and ownership procedures.

5. Re-evaluate the fair value of the vehicle after inspecting its condition, and may modify or cancel the deal if the condition is found unsuitable or inconsistent with company policy.

6. Perform all acts and deeds necessary to execute this transaction in full.

Car Swipe Services Private Limited takes full responsibility for the actions performed by Mr. Omprakash in relation to this vehicle transaction.

For any verification or clarification, you may contact us at support@carswipe.in.
    `.trim();

    const splitBody = doc.splitTextToSize(body, 190);
    doc.setFontSize(11);
    doc.text(splitBody, 10, bodyY, { maxWidth: 190, lineHeightFactor: 1.3 }); // tightened line spacing

    // Footer - Signature
    const footerY = 250;
    doc.setFont('helvetica', 'bold');
    doc.text('Authorized Signatory', 10, footerY + 10);
    doc.setFont('helvetica', 'normal');
    doc.text('For Car Swipe Services Private Limited', 10, footerY + 16);
    doc.text('Signature:', 10, footerY + 22+5);
    doc.line(30, footerY + 22+5, 90, footerY + 22+5); // Signature line

    // Footer Note
    doc.setFontSize(8);
    doc.setTextColor(100);
   

    // Open in new tab
    const pdfUrl = doc.output('bloburl');
    window.open(pdfUrl, '_blank');
  };

  const loadImageAsBase64 = async (url) => {
    const res = await fetch(url);
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  return null;
};

export default AuthorityLetterGenerator;
