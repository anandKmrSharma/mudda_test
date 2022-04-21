const mongoose= require("mongoose");

const transSchema= new mongoose.Schema({
    sourceText: {type: String},
    translateTo: {type: String}
},{
    timestamps: true,
    versionKey: false
}
)

module.exports= mongoose.model("data",transSchema);


