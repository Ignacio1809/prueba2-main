import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {
  listado=[];
  idPersona: string;
  constructor(private api: ApirestService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async p => {
      this.idPersona = p.get('id');
    })
    this.leer();
  }

  async leer() {
    await this.api.getComment(this.idPersona);
    this.listado = this.api.listado;
    console.log("metodo leer" + this.listado);
    console.log(this.idPersona);
  }

}