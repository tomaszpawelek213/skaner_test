<template>
  <Layout>
    <template #headerSlot></template>
      <div style="font-size: larger; margin: 30px;">--- Skaner ---</div>
      <div style="font-size: small;">odczytaj kod QR z urządzenia by pobrać "Virtual Ticket"</div>
      <div style="font-size: small;">odczytaj kod Biletu TK:EAN-13 by opłacić bilet przez Przelewy24"</div>
      <!--<div style="display: flex; flex-direction: column;">asddada</div>-->
      <div style="margin-top: 45%;">
        . . . .
        <div style="margin-left: 100px; margin-right: 100px;"> 
          <ion-list>
            <ion-item>
                
                <ion-input  v-model="kodQR" label=" Kod TK/QR:" placeholder="odczytany KOD"> </ion-input>
                
            </ion-item>
          </ion-list> 
          <ion-button>sprawdzam</ion-button>
        </div>   
      </div>  
    <template #footerSlot></template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import { ref } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useIonRouter, IonButton, onIonViewWillEnter,IonList,IonItem,IonInput } from '@ionic/vue';
const router = useIonRouter();

const kodQR = ref('');

</script>