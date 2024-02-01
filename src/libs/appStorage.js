import { Drivers, Storage } from '@ionic/storage';

const storageConfig = {
    name: 'ABS-memo',
    driverOrder: [Drivers.LocalStorage]
}

// wyciągnąć tworzenie storage do osobnej funkcji - używać jej w zapisie i odczycie


export async function saveToStorage(key, value){
    const store = new Storage(storageConfig);  
    await store.create();
    await store.set(key, value)
}

export async function readFromStorage(key){
    const store = new Storage(storageConfig);
    await store.create();
    const value = await store.get(key)
    return value
}