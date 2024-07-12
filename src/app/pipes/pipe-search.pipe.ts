import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSearch'
})
export class PipeSearchPipe implements PipeTransform {

  transform(allRecipes:any[],searchKey:string): any[] {
    const result:any = []

    if (!allRecipes || searchKey=="") {
      return allRecipes
    } else {
      allRecipes.forEach((item:any) => {
        if (item['cuisine'].toLowerCase().includes(searchKey.toLowerCase())) {
          result.push(item)
        }
      })
      return result
    }
  }

}
