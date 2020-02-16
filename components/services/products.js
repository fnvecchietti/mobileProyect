import React from 'react'

export const getProducts = async (props, setProducts, setLoading) => {
       let result = [] 
       let data = await props.firebase.getCollection('promociones')
       .where('importe', '==', 300)
        .get()
        .then(
            function(snapshot){
                snapshot.forEach(doc =>{
                    const data = (doc.id, '=>', doc.data())
                    result.push(data) 
                    
                    
                })
                setProducts(result)
                setLoading(false)
              
            },
            function(err){
                console.log(err)
            }
        )


}

