<template>

<Layout>
    <template #headerSlot></template>
      <ion-card-header>
        <ion-card-title>Parkingi</ion-card-title>
        <ion-card-subtitle>lista:</ion-card-subtitle>
      </ion-card-header>
    
    <ion-list style="margin-right: 15px;">
          <ion-item v-for="item in parkingArray" button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageP" /></ion-thumbnail>
              <ion-label>
              {{ item.id }}: {{item.name}}  
              </ion-label>
          </ion-item>
    </ion-list>
    
    <!--
      <ion-button style="width: 150px; margin-bottom: 60px; margin-top: 20px;"   @click="getp">get parking</ion-button>
      <ion-list style="margin-right: 15px;">
          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageP" /></ion-thumbnail>
              <ion-label>
              Parking Równica   
              </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageP" /></ion-thumbnail>
              <ion-label>
              Parking Równica   
              </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageP" /></ion-thumbnail>
              <ion-label>
              DW SWIERK   
              </ion-label>
          </ion-item>

          <ion-item button detail="true">
            <ion-thumbnail slot="start"><img alt="Parking" :src="ImageP" /></ion-thumbnail>
              <ion-label>
              Wisła Parafia   
              </ion-label>
          </ion-item>

      </ion-list>
      -->
    <template #footerSlot></template>




  </Layout>
</template>

<script setup>

import Layout from './Layout.vue';
import { ref } from 'vue';
import {getcard,getparking,connect} from '../libs/Api';
import { saveToStorage, readFromStorage } from '../libs/AppStorage';
import { useIonRouter, IonButton,IonList,IonItem,IonInput,IonLabel,onIonViewDidEnter,IonThumbnail,IonCardHeader,IonCardTitle,IonCardSubtitle } from '@ionic/vue';
import ImageP from '../res/local_parking_FILL0_wght400_GRAD0_opsz24.svg';
const router = useIonRouter();


const parkingArray = ref('');
//----------------------------
onIonViewDidEnter(async ()=>
  {
  const response = await getparking();
  const {data} = response.data;
  parkingArray.value = data;      
  }
)
//-----------------------------
async function getp (){
const response = await getparking();
const {data} = response.data;
parkingArray.value = data;
}
</script>