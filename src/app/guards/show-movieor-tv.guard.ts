import { CanActivateFn } from '@angular/router';

export const showMovie: CanActivateFn = (route, state) => {
  if(state.toString().includes('movies')){
    return true;
   }
   return false
};

export const showTv: CanActivateFn = (route, state) => {
 if(state.toString().includes('tv-shows')){
  return true;
 }
 return false
  
};
