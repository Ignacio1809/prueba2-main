import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { 

    this.init();

  }
  async init()
  {
    await this.storage.create();
  }
  //async agregar(key: string, valor: any)
  async agregar( valor: any)//tiene que ser un json
  {
    let id = await this.storage.length() + 1;//el id se forma de manera automatica con esto
    await this.storage.set(id.toString(), valor)
  }
  obtener(key: string)
  {
    return this.storage.get(key);
  }
}  
