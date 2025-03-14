export function createSnippet(variableName, data, space = 2) {
  if(variableName){
      return `const ${variableName} = ${JSON.stringify(data, null, space)}`;
  }else{
    return `${JSON.stringify(data, null, space)}`;
  }

}
