
# Course_Data_Science_Platzi
#  show dbs --> nos permite visualizar los dbs 
# use namedbs --> para crear o utilizar el db que necesitamos
#db.namecoleccion.--> para crear o utilizar el documento
# insertOne --> lo que hace es guardar  un documento dentro de una bd
/*crear una coleccion e insertar un documento */
db.inventory.insertOne( {item: "canvas", qty: 100, tags: ["cotton"], size: { h:28, w: 35.5, uom: "cm"}}
 )
# bd nos devuelve una bandera donde nos confirma si el documento quedo guardado


# El campo _id si no es agregado por nosotros de forma explícita, MongoDB lo agrega por nosotros como un ObjectId
# el campo _id es obligatorio en todos los documentos


# ---------------------------------Create-----------------------------
db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)


db.inventory.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] )

# buscar con una codicion de igualdad
db.inventory.find( { item: "canvas" } )

# para imprimer mas organizado .pretty
db.inventory.find( { item: "canvas" } ).pretty() 

# Atomicidad, todas las operaciones de escritura en MongoDB con atómicas a nivel de documentos 
