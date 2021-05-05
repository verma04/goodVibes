
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  GET_CAFE,

 
 
} from '@/apollo/queries'



export const useGetCafes = () => useQuery(GET_CAFE);
