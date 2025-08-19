const nome = 'João';

const obj = {nome};

const novoObj = {...obj, sobrenome: 'Silva'};

const novoObj2 = {...novoObj, idade: 23}

console.log(nome);
console.log(obj);
console.log(novoObj);
console.log(novoObj2);


// Esse código não funciona em navegadores antigos, pois o mesmo não entende o código ES6. Para que o código funcione, é necessário transpilar o código ES6 para ES5. Para isso, podemos usar o Babel. 

// Tem como automatizar o processo de transpilação? Sim, usando o Babel CLI.
/* Usando: 
"babel": "babel ./main.js -o ./bundle.js --presets=@babel/preset-env -w"

Dentro do package.json, podemos criar um script para automatizar o processo de transpilação. Para isso, basta adicionar o script dentro da seção "scripts" do package.json. Onde o trecho -w(--watch) faz com que o processo de transpilação seja executado automaticamente sempre que o arquivo main.js for alterado.
*/

// Babel raramente é usado sozinho. Geralmente, é usado em conjunto com outras ferramentas, como o Webpack (que usa o Babel para resolver a parte do JS).