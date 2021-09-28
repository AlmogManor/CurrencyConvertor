
## Table of contents
* [Info](#info)
* [Installation](#installation)
* [Change Colors](#change-colors)

## Info
This is a chromium extension that allows you to convert between currencies (CAD, EUR, GBP, ILS, USD) without opening a new tab.  
The extension uses current exchange rates from Europa Central Bank (https://www.ecb.europa.eu/home/html/index.en.html).

## Installation
While I am waiting for this extension to be approved by Microsoft, you can install it as a developer build the following way:  
  
1. download the code from this repository (press the green "Code" button and then "Download ZIP").
2. unzip the folder, you should have a folder named `CurrencyConvertor-master`, with folders named `popup` and `icons` inside.
3. save this folder somewhere safe, I recommend `C:\Program Files`. If you delete this file the extension will be deleted too.
4. follow the next steps depending on your browser:
  
### Google Chrome:  
1. open the settings page.  
2. open the Extensions page (chrome://extensions/).  
3. on the top right, enable Developer Mode.  
4. click Load unpacked.  
5. select the `CurrencyConvertor-master` folder you saved in step 2.  
  
### Microsoft Edge:  
1. open the Extensions page (edge://extensions/).  
2. on the bottom left, enable Developer Mode.  
3. click Load unpacked.  
4. select the `CurrencyConvertor-master` folder you saved in step 2.  
  
## Change Colors
How to change colors:  
1. open the popup.css file in the `CurrencyConvertor-master\popup\`  
2. inside ":root{}" edit the rgb values of the following fields:  
    `--currencyTypeColor` - change the color of the currency type text (ILS, USD...).  
    `--currencyTypeBackgroundColor` - change the background color of the currency type menu.  

    `--textColor` - change the color of the text inside the text field (where you input currency amount).  
    `--textBackgroundColor` - change the background color of the text field.  
    `--textBorderColor` - change the color of the border of the text field.  

    `--backgroundColor` - change the background color of the extension.  
  
#### example:
    changing:  
    --currencyTypeColor: rgb(134, 206, 235);  
    to:  
    --currencyTypeColor: rgb(233, 40, 40);  
    will make the three letter representation of the currency turn red.
