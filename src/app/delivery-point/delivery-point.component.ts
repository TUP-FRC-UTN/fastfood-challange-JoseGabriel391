import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../pedido.model';
import { PosComponent } from "../pos/pos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [PosComponent, CommonModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  //@Output() pedidoEntregados = new EventEmitter<Pedido>();
  @Input() pedidosListos: Pedido[] = [];

  onPedidoListo(pedido: Pedido){
    this.pedidosListos.push(pedido);
    console.log('Pedido listo para entregar: ', pedido);
  }

  entregarPedido(pedido: Pedido){
    this.pedidosListos = this.pedidosListos.filter(p => p !== pedido);
    console.log("Pedido entregado");
    alert("Pedido entregado");

  }
}
