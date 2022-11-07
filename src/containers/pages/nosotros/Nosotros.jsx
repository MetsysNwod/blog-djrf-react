import { connect } from "react-redux"
import { toast } from 'react-toastify'
import axios from "axios"
import { useEffect, useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }
    

function Nosotros(){
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/about/`)
        .then(res => {
          
          setLoading(false);
          toast.success("Mensaje enviado correctamente, estaremos en contacto muy pronto")
          
        })
        .catch(err => {
            
            setLoading(false);
            toast.error("Error al enviar mensaje")
          }) 
        }

        fetchData()
        
    return (
        <div>
            Nosotros
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

})(Nosotros)