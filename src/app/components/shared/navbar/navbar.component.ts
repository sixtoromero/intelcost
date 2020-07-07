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

  buscarImagenTexto(value: string) {
    if (value.length > 0) {
      this.router.navigate(['/imgfilter', value + '|text']);
    }
  }

  buscarImagenCategoria(value: string) {
    if (value === '-1') {
      this.router.navigate(['gallery']);
    } else {
      this.router.navigate(['/imgfilter', value + '|category']);
    }
  }

}
