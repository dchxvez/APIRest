var mongoose = requiere('mongoose');
var Schema=mongoose.Schema;

var AutoSchema={
  marca:String,
  submarca:String,
  color:String,
  caballos:Number,
  segmento:String

}



module.export=mongoose.model('Autos',AutoScherma);
