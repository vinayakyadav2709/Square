import {useState, StyleSheet} from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Button, View } from 'react-native';

const html = `
<html>
<head>
<style>
.myDiv {
  
  background-color: lightblue;
  text-align: center;
  height: 297mm;
  width: 210mm;
}
</style>
</head>

<body>

<div class="myDiv">
  <h2>This is a heading in a div element</h2>
  <p>This is some text in a div element.</p>
</div>

</body>
</html> 
`;

const html2 = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <style>
    body{
        
        }
        
        
        .card {
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 0 solid rgba(0,0,0,.125);
            border-radius: 1rem;
        }
    </style>
    </head>
  <body style="text-align: center;">

  <div class="container">
  <div class="row">
          <div class="col-lg-12">
              <div class="card">
                  <div class="card-body">
                      
  
                      <hr class="my-4">
  
                      <div class="row">
                          <div class="col-sm-6">
                              <div class="text-muted">
                                  <h5 class="font-size-16 mb-3">Name:</h5>
                                  <h5 class="font-size-15 mb-2">Lal Yadav</h5>
                                  <p class="mb-1">4068 Post Avenue Newfolden, MN 56738</p>
                                  <p class="mb-1">PrestonMiller@armyspy.com</p>
                                  <p>001-234-5678</p>
                              </div>
                          </div>
                          <!-- end col -->
                          <div class="col-sm-6">
                              <div class="text-muted text-sm-end">
                                  <div>
                                      <h5 class="font-size-15 mb-1">Invoice No:</h5>
                                      <p>#DZ0112</p>
                                  </div>
                                  <div class="mt-4">
                                      <h5 class="font-size-15 mb-1">Invoice Date:</h5>
                                      <p>12 Oct, 2020</p>
                                  </div>
                                  <div class="mt-4">
                                      <h5 class="font-size-15 mb-1">Order No:</h5>
                                      <p>#1123456</p>
                                  </div>
                              </div>
                          </div>
                          <!-- end col -->
                      </div>
                      <!-- end row -->
                      
                      <div class="py-2">
                          <h5 class="font-size-15">Order Summary</h5>
  
                          <div class="table-responsive">
                              <table class="table align-middle table-nowrap table-centered mb-0">
                                  <thead>
                                      <tr>
                                          <th style="width: 70px;">No.</th>
                                          <th>Item</th>
                                          <th>Price</th>
                                          <th>Quantity</th>
                                          <th class="text-end" style="width: 120px;">Total</th>
                                      </tr>
                                  </thead><!-- end thead -->
                                  <tbody>
                                      <tr>
                                          <th scope="row">01</th>
                                          <td>
                                              <div>
                                                  <h5 class="text-truncate font-size-14 mb-1">Black Strap A012</h5>
                                                  <p class="text-muted mb-0">Watch, Black</p>
                                              </div>
                                          </td>
                                          <td>$ 245.50</td>
                                          <td>1</td>
                                          <td class="text-end">$ 245.50</td>
                                      </tr>
                                      <!-- end tr -->
                                      <tr>
                                          <th scope="row">02</th>
                                          <td>
                                              <div>
                                                  <h5 class="text-truncate font-size-14 mb-1">Stainless Steel S010</h5>
                                                  <p class="text-muted mb-0">Watch, Gold</p>
                                              </div>
                                          </td>
                                          <td>$ 245.50</td>
                                          <td>2</td>
                                          <td class="text-end">$491.00</td>
                                      </tr>
                                      <!-- end tr -->
                                      <tr>
                                          <th scope="row" colspan="4" class="text-end">Sub Total</th>
                                          <td class="text-end">$732.50</td>
                                      </tr>
                                      <!-- end tr -->
                                      <tr>
                                          <th scope="row" colspan="4" class="border-0 text-end">
                                              Discount :</th>
                                          <td class="border-0 text-end">- $25.50</td>
                                      </tr>
                                      <!-- end tr -->
                                      <tr>
                                          <th scope="row" colspan="4" class="border-0 text-end">
                                              Shipping Charge :</th>
                                          <td class="border-0 text-end">$20.00</td>
                                      </tr>
                                      <!-- end tr -->
                                      <tr>
                                          <th scope="row" colspan="4" class="border-0 text-end">
                                              Tax</th>
                                          <td class="border-0 text-end">$12.00</td>
                                      </tr>
                                      <!-- end tr -->
                                      <tr>
                                          <th scope="row" colspan="4" class="border-0 text-end">Total</th>
                                          <td class="border-0 text-end"><h4 class="m-0 fw-semibold">$739.00</h4></td>
                                      </tr>
                                      <!-- end tr -->
                                  </tbody><!-- end tbody -->
                              </table><!-- end table -->
                          </div><!-- end table responsive -->
                          <div class="d-print-none mt-4">
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div><!-- end col -->
      </div>
  </div>
  </body>
</html>
`




export default function Pdf () {
    const [selectedPrinter, setSelectedPrinter] = useState();

    const print = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
        html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
    };

    const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
      };
    
      const selectPrinter = async () => {
        const printer = await Print.selectPrinterAsync(); // iOS only
        setSelectedPrinter(printer);
      };


    return (
    <View >
      <Button title="Print" onPress={print} />
      <View />
      <Button title="Print to PDF file" onPress={printToFile} />
     
    </View>
  );
}


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       backgroundColor: '#ecf0f1',
//       flexDirection: 'column',
//       padding: 8,
//     },
//     spacer: {
//       height: 8,
//     },
//     printer: {
//       textAlign: 'center',
//     },
//   });