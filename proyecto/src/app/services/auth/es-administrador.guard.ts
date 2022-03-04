import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class EsAdministradorGuard {
    constructor(private readonly _authService: AuthService, private readonly _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            const esAdministrador = this._authService.usuarioLogeado.tipo_Usuario === 'Admin';
        if (!esAdministrador) {
            this._router.navigate(['/forbidden']);
        }
        return esAdministrador;
    }
}
