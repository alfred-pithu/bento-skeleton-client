import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('accessToken');
  return !token ? true : inject(Router).createUrlTree(['/dashboard']);
};
