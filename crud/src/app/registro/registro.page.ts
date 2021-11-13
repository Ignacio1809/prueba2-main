import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private crud: CrudService,
    private toast: ToastController) { }

  ngOnInit() {
    /*
    this.crud.agregar("1","Juan");

    const valor = this.crud.obtener("1");
    valor.then(x=> console.log(x));
    */
  }
  async agregar(txtRut: HTMLInputElement, txtNombre: HTMLInputElement, txtFono: HTMLInputElement) {
    //Crear formato para almacenar todos estos datos
    const datos = [{ "rut ": txtRut.value, "nombre": txtNombre.value, "fono": txtFono.value }]; //array  //con .value se rescata el valor que el
    this.crud.agregar(datos);
    txtRut.value = "";
    txtNombre.value = "";
    txtFono.value = "";
    const toast = await this.toast.create({

      message: 'Los datos fueron guardados.',

      duration: 2000,

      position: "middle"

    });

    toast.present();

  }
}
