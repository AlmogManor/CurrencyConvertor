How to install:  
While I am waiting for this extension to be approved by microsoft, you can install it as a developer build the following way:  
  
1. download the code from this repository.
2. unzip the folder, you should have a folder named "CurrencyConvertor", with folders named "popup" and "icons" inside.
3. save this folder somewhere safe, I recommend "C:\Program Files", if you delete this file the extension will be deleted too.
4. follow the next steps depending on your browser:
  
Google Chrome:  
1. open the settings page.
2. open the Extensions page (chrome://extensions/).
3. on the top right, enable Developer Mode.
4. click Load unpacked.
5. select the CurrencyConvertor folder you saved in step 2.
  
Microsoft Edge:  
1. open the Extensions page (edge://extensions/).
2. on the bottom left, enable Developer Mode.
3. click Load unpacked.
4. select the CurrencyConvertor folder you saved in step 2.  
  

How to change colors:  
1. open the popup.css file in the CurrencyConvertor/popup/  
2. inside :root edit the rgb values of the following fields:  
    --currencyTypeColor - change the color of the currency type text (ILS, USD...)  
    --currencyTypeBackgroundColor - change the background color of the currency type menu  

    --textColor - change the color of the text inside the text field (where you input currency amount)  
    --textBackgroundColor - change the background color of the text field  

    --backgroundColor - change the background color of the extension  