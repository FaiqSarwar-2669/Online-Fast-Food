/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


/* global index, retun */

let deal1=0,deal2=0,deal3=0,deal4=0,deal5=0,deal6=0,DealTotal=0;

function show() {
  let total=document.getElementById('result');
  let dataForm = document.getElementById('data-form');
  let currentTop = parseInt(dataForm.style.top);
  if(total.value==="")
  {
      alert("Select at least one itme");
      retun;
  }
  document.getElementById('amount').value=total.value;
  if (currentTop < 0) {
    dataForm.style.top = "70px";
  } else {
    dataForm.style.top = "-500px";
  }
}
function calculate() {
  try {
    let quantity = parseInt(document.getElementById('quantity-1').value);
    let price = parseInt(document.getElementById('price-1').value);
    if (isNaN(quantity) || isNaN(price)) {
      throw new Error('Please enter integer values only');
    }
    deal1 = quantity * price;
    document.getElementById('Total-1').value = deal1;
    DealTotal=deal1+deal2+deal3+deal4+deal5+deal6;
    document.getElementById('result').value = ""+DealTotal;
  } catch (error) {
    if (error.message === 'Please enter integer values only') {
      alert(error.message);
  }
}
}
function calculate1() {
  try {
    let quantity = parseInt(document.getElementById('quantity-2').value);
    let price = parseInt(document.getElementById('price-2').value);
    if (isNaN(quantity) || isNaN(price)) {
      throw new Error('Please enter integer values only');
    }
    deal2 = quantity * price;
    document.getElementById('Total-2').value = deal2;
    DealTotal=deal1+deal2+deal3+deal4+deal5+deal6;
    document.getElementById('result').value = ""+DealTotal;
  } catch (error) {
    alert(error.message);
  }
}
function calculate2() {
  try {
    let quantity = parseInt(document.getElementById('quantity-3').value);
    let price = parseInt(document.getElementById('price-3').value);
    if (isNaN(quantity) || isNaN(price)) {
      throw new Error('Please enter integer values only');
    }
    deal3 = quantity * price;
    document.getElementById('Total-3').value = deal3;
    DealTotal=deal1+deal2+deal3+deal4+deal5+deal6;
    document.getElementById('result').value = ""+DealTotal;
  } catch (error) {
    alert(error.message);
  }
}
function calculate3() {
  try {
    let quantity = parseInt(document.getElementById('quantity-4').value);
    let price = parseInt(document.getElementById('price-4').value);
    if (isNaN(quantity) || isNaN(price)) {
      throw new Error('Please enter integer values only');
    }
    deal4 = quantity * price;
    document.getElementById('Total-4').value = deal4;
    DealTotal=deal1+deal2+deal3+deal4+deal5+deal6;
    document.getElementById('result').value = ""+DealTotal;
  } catch (error) {
    alert(error.message);
  }
}
function calculate4() {
  try {
    let quantity = parseInt(document.getElementById('quantity-5').value);
    let price = parseInt(document.getElementById('price-5').value);
    if (isNaN(quantity) || isNaN(price)) {
      throw new Error('Please enter integer values only');
    }
    deal5 = quantity * price;
    document.getElementById('Total-5').value = deal5;
    DealTotal=deal1+deal2+deal3+deal4+deal5+deal6;
    document.getElementById('result').value = ""+DealTotal;
  } catch (error) {
    alert(error.message);
  }
}
function calculate5() {
  try {
    let quantity = parseInt(document.getElementById('quantity-6').value);
    let price = parseInt(document.getElementById('price-6').value);
    if (isNaN(quantity) || isNaN(price)) {
      throw new Error('Please enter integer values only');
    }
    deal6 = quantity * price;
    document.getElementById('Total-6').value = deal6;
    DealTotal=deal1+deal2+deal3+deal4+deal5+deal6;
    document.getElementById('result').value = ""+DealTotal;
  } catch (error) {
    alert(error.message);
  }
}
