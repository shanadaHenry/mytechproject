
import {
  
  SIGNUP,
  USER_LOGIN,
  MENU,
  ORDER_MENU,
  BAYAR,
  HAPUS_MENU,
  TAMBAH_MENU,
  EDIT_MENU,
  DATA_USER,
  HAPUS_USER,
  TAMBAH_USER,
  TAMBAH_FOTO_MENU,
  EDIT_USER,
  TECHNISI_LOGIN,
  TECHNISI,
  CUSTOMERS_LOGIN,
  EDIT_CUSTOMERS,
  TAMBAH_TICKETS,
  EDIT_TICKETS,
  KATEGORI,
  TICKETS,
  NEW_TICKETS,
  KATEGORI_TICKETS,
  MESSAGE,

} from './UrlApi';

function getUrl(type) {
  return {
    "SIGNUP": SIGNUP,
    "LOGIN": USER_LOGIN,
    "MENU": MENU,
    "ORDER-MENU": ORDER_MENU,
    "BAYAR": BAYAR,
    "HAPUS-MENU": HAPUS_MENU,
    "TAMBAH-MENU": TAMBAH_MENU,
    "EDIT-MENU": EDIT_MENU,
    "DATA-USER": DATA_USER,
    "HAPUS-USER": HAPUS_USER,
    "TAMBAH-USER": TAMBAH_USER,
    "TAMBAH-FOTO-USER": TAMBAH_FOTO_MENU,
    "EDIT-USER": EDIT_USER,
    "CUSTOMERS-LOGIN": CUSTOMERS_LOGIN,
    "EDIT-CUSTOMERS":EDIT_CUSTOMERS,
    "USER-LOGIN": USER_LOGIN,
    "TECHNISI-LOGIN": TECHNISI_LOGIN,
    "TECHNISI": TECHNISI,
    "KATEGORI": KATEGORI,
    "TAMBAH-TICKETS": TAMBAH_TICKETS,
    "EDIT-TICKETS": EDIT_TICKETS,
    "TICKETS": TICKETS,
    "NEW-TICKETS": NEW_TICKETS,
    "KATEGORI-TICKETS": KATEGORI_TICKETS,
    "MESSAGE": MESSAGE
  }[type];
}

async function requestData(headers, body, request_url) {
  var URL = getUrl(request_url);
  try {
    let response = await fetch(URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
};

export { requestData };

// import { 
//   TECHNISI_LOGIN, 
//   CUSTOMERS_LOGIN, 
//   USER_LOGIN, 
//   TAMBAH_TICKETS, 
//   EDIT_TICKETS, 
//   MENU_FAVORIT, 
//   MENU, 
//   ORDER_MENU, 
//   BAYAR, 
//   HAPUS_MENU, 
//   KATEGORI, 
//   TICKETS, 
//   KATEGORI_TICKETS, 
//   TAMBAH_MENU, 
//   EDIT_MENU } from './UrlApi';

// async function requestData(headers, body, request_url) {
//   var URL = '';
//   switch (request_url) {
//     case "TECHNISI-LOGIN": URL = TECHNISI_LOGIN;
//       break;
//     case "CUSTOMERS-LOGIN": URL = CUSTOMERS_LOGIN;
//       break;
//     case "LOGIN": URL = USER_LOGIN;
//       break;
//     case "FAVORIT": URL = MENU_FAVORIT;
//       break;
//     case "MENU": URL = MENU;
//       break;
//     case "KATEGORI": URL = KATEGORI;
//       break;
//     case "TICKETS": URL = TICKETS;
//       break;
//     case "KATEGORI-TICKETS": URL = KATEGORI_TICKETS;
//       break;
//     case "ORDER-MENU": URL = ORDER_MENU;
//       break;
//     case "BAYAR": URL = BAYAR;
//       break;
//     case "HAPUS-MENU": URL = HAPUS_MENU;
//       break;
//     case "TAMBAH-MENU": URL = TAMBAH_MENU;
//       break;
//     case "TAMBAH-TICKETS": URL = TAMBAH_TICKETS;
//       break;
//     case "EDIT-TICKETS": URL = EDIT_TICKETS;
//       break;
//       case "EDIT-MENU": URL = EDIT_MENU;
//       break;
//     default: URL = null;
//   }
//   try {
//     let response = await fetch(URL, {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(body)
//     });
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error(`Error is : ${error}`);
//   }
// };

// export { requestData };

// import { 
//   USER_LOGIN, 
//   MENU, 
//   ORDER_MENU, 
//   BAYAR, 
//   HAPUS_MENU, 
//   KATEGORI, 
//   TAMBAH_MENU, 
//   EDIT_MENU, 
//   DATA_USER, 
//   HAPUS_USER, 
//   TAMBAH_USER,
//   TAMBAH_FOTO_MENU,
//   EDIT_USER
// } from './UrlApi';

// function getUrl (type) {
//   return {
//     "LOGIN" : USER_LOGIN,
//     "MENU" : MENU,
//     "KATEGORI" : KATEGORI,
//     "ORDER-MENU" : ORDER_MENU,
//     "BAYAR" : BAYAR,
//     "HAPUS-MENU" : HAPUS_MENU,
//     "TAMBAH-MENU" : TAMBAH_MENU,
//     "EDIT-MENU" : EDIT_MENU,
//     "DATA-USER" : DATA_USER,
//     "HAPUS-USER" : HAPUS_USER,
//     "TAMBAH-USER" : TAMBAH_USER,
//     "EDIT-USER" : EDIT_USER,
//     "TAMBAH-FOTO-USER" : TAMBAH_FOTO_MENU
//   }[type];
// }

// async function requestData(headers, body, request_url) {
//   var URL = getUrl(request_url);
//   try {
//     let response = await fetch(URL, {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(body)
//     });
//     let responseJson = await response.json();
//     return responseJson; 
//   } catch (error) { 
//     console.error(`Error is : ${error}`);
//   }
// };

// export {requestData};