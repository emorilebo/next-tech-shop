const OrderSchema = new Schema({
    products: Object,
    paid: {type:Number, defaultValue:0}
}, { timestamps: true });

const Order = models?.Order || model('Order', OrderSchema)