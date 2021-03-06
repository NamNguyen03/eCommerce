import { Injectable } from "@angular/core";
import Swal from "sweetalert2";


@Injectable({ providedIn: 'root' })
export class ConfirmService {
    confirmAction(e: any, action: string) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, ' + action + ' it!',
        }).then((result) => {
            if (result.isConfirmed) {
                e();
            }
        });
    }
}