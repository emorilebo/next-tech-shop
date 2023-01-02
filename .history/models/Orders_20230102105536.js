const OrderSchema = new Schema({
    products: Object,
    paid: {type:Number}
}, { timestamps: true });
