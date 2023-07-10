// const INIT_STATE={
//     carts:[]
// };

// export const cartreducer =(state=INIT_STATE,action)=>{
//     switch(action.type){
//         case "ADD_CART":
//         return{
//             ...state,
//             carts:[...state.carts,action.payload]
//         }
//         default:
//             return state
//     }
// }

export const sidebar=(state=false,action)=>{
  switch(action.type){
    case "SHOW_SIDEBAR":
      return true

    case "HIDE_SIDEBAR":
       return false
    
    default:
        return state;
  }
}
// const initialState = {
//     count: 0
//   };
  
//   const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return {
//           ...state,
//           count: state.count + 1
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default counterReducer;

