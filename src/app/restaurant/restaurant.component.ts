import { Component } from '@angular/core';
import { Pedido } from '../pedido.model';
import { PosComponent } from "../pos/pos.component";
import { CommonModule } from '@angular/common';
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, CommonModule, KitchenComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  pedidos: Pedido[] = [];
  pedidosListos: Pedido[] = [];


  onNuevoPedido(pedido: Pedido){
    this.pedidos.push(pedido);
    console.log('Pedido recibido: ', pedido);

  }

  entregarPedido(pedido: Pedido){
    this.pedidosListos.push(pedido)
  }
}
