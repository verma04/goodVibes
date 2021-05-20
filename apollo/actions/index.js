
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  GET_CAFE,
  GALLERY,
  TESTS,
  SERVICES,
  TEAM,
  HOME,
  CATEGORY,
  VED

 
 
} from '@/apollo/queries'



export const useGetCafes = () => useQuery(GET_CAFE);

export const useGetGallery = () => useQuery(GALLERY);


export const useGetTests = () => useQuery(TESTS);


export const useGetServices = () => useQuery(SERVICES);
export const useGetTeam = () => useQuery(TEAM);
export const useGetHome = () => useQuery(HOME);

export const useGetCategory = () => useQuery(CATEGORY);

export const useGetVedios = () => useQuery(VED);