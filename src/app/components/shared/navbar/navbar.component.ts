import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ///Método que permite filtrar por el texto ingresado en la caja de texto del navbar
  buscarImagenTexto(value: string) {
    if (value.length > 0) {
      //al navegar al componente imgfilter se le concatena el tipo de filtro realizado
      //text: hace referencia lo que digitó el usuario
      this.router.navigate(['/imgfilter', value + '|text']);
    } else {
      this.router.navigate(['gallery']);
    }
  }

  buscarImagenCategoria(value: string) {
    if (value === '-1') {
      this.router.navigate(['gallery']);
    } else {
      //al navegar al componente imgfilter se le concatena el tipo de filtro realizado
      //category: hace referencia a la selección de la lista realizada por el usuario
      this.router.navigate(['/imgfilter', value + '|category']);
    }
  }

}
