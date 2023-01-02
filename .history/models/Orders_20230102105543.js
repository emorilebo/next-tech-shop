const OrderSchema = new Schema({
    products: Object,
    paid: {type:Number, defaultValue:0}
}, { timestamps: true });
