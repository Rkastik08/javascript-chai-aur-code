// to iterate an object

const lang = {
  js : 'javascript',
  py : 'python',
  ts : 'typescript'
}

for (const key in lang) {
  // console.log(`${key} :- ${lang[key]}`);

}

const programming = ['js', 'cpp', 'rb', 'java']

for (const key in programming) {
    console.log(`${key} = ${programming[key]}`);

}