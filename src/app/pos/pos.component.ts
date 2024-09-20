import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../pedido.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  name: string = '';
  description: string = '';

  @Output() nuevoPedido = new EventEmitter<Pedido>();

  agregarPedido(){
    const nuevoPedido = new Pedido(
      Math.floor(Math.random() * 1000) + 1,
      this.name,
      this.description,
      new Date() 
    );
    this.nuevoPedido.emit(nuevoPedido);
    this.name = '';
    this.description = '';
  }
}
