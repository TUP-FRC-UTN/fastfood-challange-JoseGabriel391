import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../pedido.model';
import { PosComponent } from "../pos/pos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [PosComponent,CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  @Input() pedidos: Pedido[] = [];
  pedidosEnCoccion: Pedido[] = [];

  @Output() pedidoListos = new EventEmitter<Pedido>();

  comenzarCoccion(pedido: Pedido){
    this.pedidos = this.pedidos.filter(p => p !== pedido);
    this.pedidosEnCoccion.push(pedido);
  }

  finalizarCoccion(pedido: Pedido){
    this.pedidosEnCoccion = this.pedidosEnCoccion.filter(p => p !== pedido);
    this.pedidoListos.emit(pedido);
  }
}
