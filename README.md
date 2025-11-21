# StoreSupercell-Spent-Calculator

🛠️ How to Use

Follow these steps to run the script on your Supercell Store purchase page:

Navigate: Go to your Supercell Store account page.  (https://store.supercell.com/account/)

Open DevTools: Press F12 or right-click anywhere on the page and select "Inspect." Then, click on the Console tab.

Execute: Copy the entire JavaScript block below and paste it into the console prompt.

`const total = Array.from(document.querySelectorAll('.Purchases_PurchaseRowPrice__P_qXV'))
  .map(el => el.textContent.trim())
  .map(text => {
    // Cleans the text: removes all non-numeric characters except for commas and dots, 
    // then converts all commas to dots for consistent float parsing.
    const cleanedText = text.replace(/[^0-9.,]/g, '').replace(/,/g, '.');
    return parseFloat(cleanedText) || 0; // Converts to float, defaults to 0 if invalid
  })
  .reduce((sum, value) => sum + value, 0);

console.log('Total Sum of Purchases:', total.toFixed(2));`

View Result: Press Enter. The console will immediately output the calculated total sum, formatted to two decimal places, representing your total spend.
