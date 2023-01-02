const OrderSchema = new Schema({
    products: Object,
    paid: {type:Number, default}
}, { timestamps: true });
