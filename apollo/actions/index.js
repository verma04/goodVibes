
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  GET_CAFE,
  GALLERY,
  TESTS

 
 
} from '@/apollo/queries'



export const useGetCafes = () => useQuery(GET_CAFE);

export const useGetGallery = () => useQuery(GALLERY);


export const useGetTests = () => useQuery(TESTS);
