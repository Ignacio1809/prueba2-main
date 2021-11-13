import { Component } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensaje : string;
  
  listado= [];
  constructor(public toastController : ToastController,
              public alertController : AlertController) {}

  ngOnInit()
  {
    /*
    console.log("Hola");
    localStorage.setItem("1","Mi primer valor");

    const x = localStorage.getItem("1");
    console.log(x);
    */
  }
  listar(){
    this.listado = [];
    for(let indice = 1; indice <= localStorage.length; indice++)
    {
      this.listado.push(localStorage.getItem(indice.toString().toUpperCase()));
    }
    this.listado.sort(( a, b ) => a > b ? 1 : -1 )
  }

  async guardar(nombre: HTMLInputElement)

  { // validar que no se repitan los datos: for

    const nom = nombre.value; //recupera la info escrita por el usuario



    if(nom.trim().length >= 3)

    {

      let existe = false;

      for(let id = 1; id <= localStorage.length; id++)

      {

        if(nom == localStorage.getItem(id.toString()))

        {

          existe = true;

          break;

        }

      }



      if(existe)

      {

        const toast = await this.toastController.create({

          message: 'El nombre ya existe.',

          duration: 3000,

          color: "danger",

          position : "middle"

        });

        toast.present();

      }

      else

      {

        let id = localStorage.length + 1

        localStorage.setItem(id.toString(), nom);

        nombre.value = "";

        const toast = await this.toastController.create({

          message: 'El nombre fue guardado con exito.',

          duration: 3000,

          color: "success",

          position : "middle"

        });

        toast.present();

      }

    }

    else

    {

      const toast = await this.toastController.create({

        message: 'No especifico un nombre.',

        duration: 3000,

        color: "danger",

        position : "top"

      });

      toast.present();

    }
  }
async limpiar()
    {
      const alert = await this.alertController.create({

        cssClass: 'my-custom-class',
  
        header: 'Confirmar!',
  
        message: '<strong>¿Estas seguro?</strong>!!!',
  
        buttons: [
  
          {
            text: 'NO',
            role: 'cancel',
            cssClass: 'secondary',
          }, {
            text: 'SI',
            handler: () => {
              localStorage.clear();
            }
          }
        ]
      });
      await alert.present();

    }
}