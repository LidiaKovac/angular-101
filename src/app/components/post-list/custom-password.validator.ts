import { AbstractControl } from "@angular/forms";

export function customPassword(ctrl: AbstractControl) {
  const isPass = ctrl.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")
  if(isPass) {
    return { isValidPassword:  true}

  } else return null
}
