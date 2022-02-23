import React, {useState, useEffect} from 'react'

const PruebaApi = () => {



    // https://docs.thedogapi.com/api-reference/images/images-search 

    const [image , setImage ] = useState({}); 
    
    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/images/search')
            .then(res => res.json())
            .then((imagenes) =>{
                // console.log(imagenes)
                setImage(imagenes);
            })
    }, [])

        /* puedo hacer un map aquí ????  */
        /* <h1> PruebaApi </h1> */
        
        

  return (
    <div>
 
        
  { image.image.map( (picture) => {
      return < img src={ picture.url } alt='hola' />
      } ) } 
        
    </div>
  )
}

export default PruebaApi; 