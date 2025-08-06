export const decodedValue=(color:string[]): number => {
  let index =  COLORS.indexOf(color[0])
  let secondIndex = COLORS.indexOf(color[1])
  let twoIndexs= index
 return Number(""+index+secondIndex)

}

 export const COLORS: string[] = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]
