const total = Array.from(document.querySelectorAll('.Purchases_PurchaseRowPrice__P_qXV'))
  .map(el => el.textContent.trim())
  .map(text => {
    // Cleans the text: removes all non-numeric characters except for commas and dots, 
    // then converts all commas to dots for consistent float parsing.
    const cleanedText = text.replace(/[^0-9.,]/g, '').replace(/,/g, '.');
    return parseFloat(cleanedText) || 0; // Converts to float, defaults to 0 if invalid
  })
  .reduce((sum, value) => sum + value, 0);

console.log('Total Sum of Purchases:', total.toFixed(2));
