import {FormGroup } from '@angular/forms'
export const fieldsEquals = (field1: string, field2: string) => {
  return (group: FormGroup) => {
      const val1 = group.controls[field1].value
      const val2 = group.controls[field2].value

      if (val1 === val2){
          return null
      }

      return {
          Equals: true
      }
  }

}
