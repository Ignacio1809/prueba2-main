import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApirestService } from '../apirest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  listado = [];
  constructor(private api: ApirestService,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.api.getUsers();
  }

  async validar(nombre: HTMLInputElement, clave: HTMLInputElement) {
    let listado = this.api.listado;
    let usuario = nombre.value;
    let contraseña = clave.value;
    let validar = false;

    if (usuario.trim().length == 3 && contraseña.trim().length == 3) {
      const toast = await this.toastController.create({
        message: 'Debe ingresar información válida',
        duration: 2000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else if (usuario.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe ingresar su nombre o usuario',
        duration: 2000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else if (contraseña.trim().length == 3)
    {
      const toast = await this.toastController.create({
        message: 'Debe ingresar una contraseña válida',
        duration: 2000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else if (contraseña != "1234")
    {
      const toast = await this.toastController.create({
        message: 'La contraseña ingresada es inválida',
        duration: 2000,
        color: "danger"
      });
      toast.present();
      return;
    }
    for (let usuarios of listado)
    {
      if (usuarios.username == nombre.value)
      {
        validar = true;
        localStorage.length + 1;
        localStorage.setItem(usuarios.id, nombre.value)
      }
    }

    if (validar == false || usuario != nombre.value)
    {
      const toast = await this.toastController.create({
        message: 'El usuario no se ha encontrado',
        duration: 2000,
        color: "danger"
      });
      toast.present();
      return;
    }
    else
    {
      const toast = await this.toastController.create({
        message: 'Usuario encontrado con éxito',
        duration: 3000,
        color: "success"
      });
      toast.present()
      nombre.value = "";
      clave.value = "";
      this.router.navigateByUrl('/usuario')
      return;
    }

  }
}
