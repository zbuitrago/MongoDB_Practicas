
# Course_Data_Science_Platzi
#  show dbs --> nos permite visualizar los dbs 
# use namedbs --> para crear o utilizar el db que necesitamos
#db.namecoleccion.--> para crear o utilizar el documento
# insertOne --> lo que hace es guardar  un documento dentro de una bd
/*crear una coleccion e insertar un documento */
db.inventory.insertOne( {item: "canvas", qty: 100, tags: ["cotton"], size: { h:28, w: 35.5, uom: "cm"}}
 )
# bd nos devuelve una bandera donde nos confirma si el documento quedo guardado





db.inventory.insertOne(
 {_id: "soyd", item: "canvas", qty: 100, tags: ["cotton"], size: { h:28, w: 35.5, uom: "cm"}}
 )

 db
 platzi-db
 db.inventory.find().pretty()
 db.inventory.findOne({_id: ObjectId('5d558003b1bc29e5b2d34c91'), qty: {$lte:125}})
 db.inventory.updateOne({_id: ObjectId('5d558003b1bc29e5b2d34c91')}, {$set:{qty:130}})
 db.inventory.deleteMany({status: "A"})