export default function () {
  const aboutVar = useState('about', () => 'about var')

  function changeAboutVar (str: string) {
    aboutVar.value = str
  }

  return {
    aboutVar: computed(() => aboutVar.value),
    changeAboutVar
  }
}
