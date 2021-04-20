import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.training'
  cursoAngular: boolean = true
  urlImagem: string = 'https://source.unsplash.com/collection/190727/400x200'

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
