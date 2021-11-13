import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  listado = [];
  datos: any;
  constructor(private api: ApirestService,
              private router: Router) { }

  ngOnInit() {
  }

  listar()
  {
    for (let i; i <= localStorage.length; i++)
    {
      this.datos = localStorage.getItem(i.toString())
    }
    this.api.getPost(this.datos);
    this.listado = this.api.listado;
  }

  salir()
  {
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
