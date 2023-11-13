function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DDrFA5u2LC":
        Script1();
        break;
      case "64kF9KpQFk7":
        Script2();
        break;
  }
}

function Script1()
{
  function loadScript(src, async = true, defer = true) {
return new Promise((resolve, reject) => {
const script = document.createElement('script');
script.src = src;
script.async = async;
script.defer = defer;
script.onload = resolve;
script.onerror = reject;
document.head.appendChild(script);
});
}
function loadStylesheet(href) {
return new Promise((resolve, reject) => {
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = href;
link.onload = resolve;
link.onerror = reject;
document.head.appendChild(link);
});
}
async function insertDependencies() {
try {
await loadScript('https://unpkg.com/intro.js@7.0.1/intro.js');
await loadStylesheet('https://unpkg.com/intro.js@7.0.1/introjs.css');
await loadScript('https://cdn.jsdelivr.net/gh/nrzmalik/IntroTourByNrz/nrzIntroTourMutilLang.js');
} catch (error) {
console.error('Failed to insert dependencies:', error);
}
}
insertDependencies();
}

function Script2()
{
  nrzIntroTour('english');
/* comments:
1. You can update the language parameter in the function to match your preferred language, such as 'english', 'urdu', 'arabic', 'dutch', 'spanish', 'french', 'mandarin', or 'portuguese'.
2. If your course does not include a seekbar, you can utilize the nrzIntroTourWithoutSeekbar('english') function.
*/
}

