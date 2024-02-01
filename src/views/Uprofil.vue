<template>
  <Layout>
    <template #headerSlot></template>
      <p style="font-size: larger; margin-top: 60px;">Profil Użytkownika</p>
      
      
      
          <div style="margin-right: 20px;">
            <ion-list >
              <ion-item>
                <ion-input v-model="email"    type="email"            label="Adres email:"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input v-model="password" type="password"            label="Password:"></ion-input>
              </ion-item>

              <ion-item>
                <ion-input  v-model="imie"                  label="Imię"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input  v-model="nazwisko" label="Nazwisko:"></ion-input>
              </ion-item>
            
            <ion-item>
                <ion-input placeholder="example: +48 XXX XXX XXX" v-model="tel" type="tel" label="Nr. tel. kom.:"></ion-input>
              </ion-item>
            </ion-list>


            <p style="font-size: larger;">Profil Firmy</p>
            <ion-list>
              <ion-item>
                <ion-input  v-model="apikey" label="   ApiKey:" placeholder="właściciel parkingu login"></ion-input>
              </ion-item>

              <ion-item>
                <ion-input  v-model="userkey" label="UserKey:" placeholder="właściciel parkingu pass"></ion-input>
              </ion-item>

              


            </ion-list>
          </div>
          <div class="centerElement">
            <ion-button style="width: 150px; margin-bottom: 60px; margin-top: 20px;"   @click="zapiszProfil">Zapisz</ion-button>
          
          </div>
    <template #footerSlot></template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import { ref } from 'vue';
import { onIonViewDidEnter } from '@ionic/vue';
import { saveToStorage, readFromStorage } from '../libs/AppStorage';
import { useIonRouter, IonButton,IonList,IonItem,IonInput } from '@ionic/vue';
const router = useIonRouter();

const email = ref('');
const password = ref('');
const imie = ref('');
const nazwisko = ref('');
const tel = ref('');
const apikey = ref('');
const userkey = ref('');



function zapiszProfil()
{
  console.log('Zapisanie start')
  saveToStorage('CemiParkMobileUprofil', [email.value, password.value, imie.value, nazwisko.value, tel.value, apikey.value, userkey.value ])
  .then(()=> 
  {
    console.log('CemiParkMobileUprofil', [email.value, password.value, imie.value, nazwisko.value, tel.value, apikey.value, userkey.value ])
  })
}







onIonViewDidEnter(async ()=>{
    const  valuesArray = await readFromStorage('CemiParkMobileUprofil'); //odczytano 
    console.log('Próba odczytu profilu');
      if(valuesArray && valuesArray.length === 7)
      {
        console.log(valuesArray);
        readFromStorage('CemiParkMobileUprofil').then((valuesArray)=>{
          const [val_email, val_password, val_imie, val_nazwisko, val_tel, val_apikey, val_usekey] = valuesArray
          email.value = val_email
          password.value = val_password
          imie.value = val_imie 
          nazwisko.value = val_nazwisko
          tel.value = val_tel
          apikey.value = val_apikey
          userkey.value = val_usekey
          })
      }
    }
  )


</script>









