import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router'
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor( private router:ActivatedRoute ) { 
    this.router.params.subscribe( paramentros => {
      console.log("Ruta PAdre");
      console.log(paramentros);
    })
  }

  ngOnInit() {
  }

}
