import axios from "axios"




//const api = 'http://localhost:3000/example'
// const api_kody = 'http://192.168.2.40/ten-projekt/public/'
//const api_kody = 'https://jsonplaceholder.typicode.com/posts'
//const url = 'https://abc.cemi.pl/api/historia';

const url = 'https://serwis.cemi.pl/api/v1/auth';
const headers =  {headers: {'x-api-key': 'kXZTj0XXikySKforn3g8aZC2vfIieNSW7eEMqMGQrHnYM0pSfJsb9RwPigTSv72x',
'Authorization': 'Bearer gRwABN4UWpblH3Wg48MoDWuJZOpJN4Gg79wKm1VVaiuhXgXN4Kukt45YI5yJhf6q', 
'Content-Type': 'application/json'} }





export async function connect(){

    console.log(url,headers);
    const response = await axios.get(url, headers)
    const status = response.status;
    if(status == 200){
        console.log('TEST połączenia  !!! OK !!!' ,url, status)
        return response;    
    }
    else{
        console.log('błąd połączenia API',url,status)
    }  

}

export async function getcard(){
    const url = 'https://serwis.cemi.pl/api/v1/parkings/36/cards/1';
    const data = {'id':1};
    //console.log(url,data, headers);
    const response = await axios.get(url,headers);
    //console.log('.................>>>>>',response);
    const status = response.status;
    if(status == 200){
        //console.log('połączenie getcard  !!! OK !!!');
        return response;    
    }
    else{
        console.log('błąd połączenia API',url)
    }  

}
    export async function getparking(){
        const url = 'https://serwis.cemi.pl/api/v1/parkings/list';
        //console.log(url,data, headers);
        const response = await axios.get(url,headers);
        //console.log('.................>>>>>',response);
        const status = response.status;
        if(status == 200){
            console.log('get parking  !!! OK !!!' ,url, status)
            return response;    
        }
        else{
            console.log('błąd połączenia API',url,status)
        } 
    }





    