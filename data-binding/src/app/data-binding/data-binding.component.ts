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
  
  valorAtual: string = ''
  valorSalvo: string = ''

  isMouseOver: boolean = false

  nomeDoCurso: string = 'Angular'

  nome: string = 'abc'

  pessoa: any = {
    nome: 'Fulano',
    idade: 20
  }

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  OnKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit(): void {
  }

}
