
export const myUseHookTask2 = () => {
  const useTheme = (color: string) => {
    try {
      localStorage.setItem('theme', color)
      const theme = localStorage.getItem('theme');
      if (theme !== null) {
        document.body.style.backgroundColor = theme;
      }
      return true
    } catch {
      console.log('Error')
      return false
    }
  }

  const useFont = (size: string) => {
    try{
      localStorage.setItem('font', size)
      const font = localStorage.getItem('font')
      if(font !== null){
        document.body.style.fontSize = font
      }
      return true
    } catch {
      console.log('Error')
      return false
    }
  }
  return {
    useFont,
    useTheme
  }
}