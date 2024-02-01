<template>
  <Layout>
    <template #headerSlot></template>
      <p style="margin-top: 100px;">Home Page</p>
      <ion-button style="width: 150px; margin-bottom: 60px; margin-top: 20px;"   @click="testcon">test połączenia</ion-button>
      <ion-button style="width: 150px; margin-bottom: 60px; margin-top: 20px;"   @click="getp">get parking</ion-button>
      <ion-button style="width: 150px; margin-bottom: 60px; margin-top: 20px;"   @click="apiv2">test api</ion-button>

    
    <ion-list>
      <ion-item v-for="item in dataArray">
          <ion-label style="margin-right: 10px;">
            {{ item.id }} {{ item.name }} 
            {{ dataArray.data }}
            </ion-label>
            {{ item }}
        </ion-item>
        
    </ion-list>          
    
    <template #footerSlot></template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import {connect} from '../libs/Api';
import {getcard,getparking} from '../libs/Api';
import {login} from '../libs/AuthService';

import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { ref } from 'vue';
import { useIonRouter,IonButton,IonItem,IonList,IonLabel, onIonViewWillEnter } from '@ionic/vue';
const router = useIonRouter();

//const karty = ref('');
const dataArray = ref([]);
const parkingArray = ref([]);
async function testcon (){

  //const response = await connect();
  //console.log('get card start',response);
  //--------------------------------
  const response2 = await getcard();
  dataArray.value = response2.data; 
  
}


async function getp (){
//--------------------------------
const response = await getparking();
console.log('response get parking',response);
parkingArray.value = response.data; 
console.log('parkingarray->:',parkingArray);
}

function apiv2() {
  login();
}


function konsola(){console.log('Zapisanie')}
</script>