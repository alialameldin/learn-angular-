import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SearchComponent} from './search/search.component'

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<unknown> {
  canDeactivate(component: SearchComponent){
    if(component.isDirty){
      return window.confirm("you have unsaved changes")
    }
    return true
  }

}
