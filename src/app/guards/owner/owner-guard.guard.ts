import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SkeletonApiService } from '../../services/skeleton-api/skeleton-api.service';
import { map } from 'rxjs';

export const ownerGuardGuard: CanActivateFn = (route, state) => {
  const skeletonApi = inject(SkeletonApiService);
  const router = inject(Router)

  return skeletonApi.getUserFromToken().pipe(
    map((data) => {
      const allowedPosition = ['owner', 'manager', 'assistant manager', 'general manager']

      if (allowedPosition.includes(data.user.employeeInformation.position.position.toLowerCase())) {
        return true
      } else {
        router.navigate(['/dashboard'])
        return false
      }
    })
  )


};



