import{ useReducer } from 'react'



const httpReducer = (state, action) => {
    switch( action.type ){
        case 'RERQUEST':
            return
         default:
             throw new Error('Hello World')   
   }
}

const initState = {

}
``

const useHttp = () => {
    // cosnt [ httpState, setHttpState ] = useReducer(httpReducer,initState)


}


export default useHttp
