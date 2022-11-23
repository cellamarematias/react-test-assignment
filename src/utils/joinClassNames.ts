function joinClassNames(
  classNames: (string | undefined | null)[]
): string {  
  let result: string = classNames.join(' ')
  return result;
}

// implemented: Login.tsx

export default joinClassNames;
