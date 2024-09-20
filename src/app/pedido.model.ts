export class Pedido{
    constructor(

        public nroPedido: number,
        public name: string = '',
        public description: string = '',
        public date: Date
    ){}

}