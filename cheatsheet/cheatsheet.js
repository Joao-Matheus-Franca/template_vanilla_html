// Formas de declarar variáveis:.
	var variable01 = null;
	let variable02 = null;
	const variable03 = null;

// Tipos de dados:
	const stringVariable = 'Olá eu sou uma string';
	const numberVariable = 33;
	const booleanVariable00 = false;
	const booleanVariable01 = true;
	const undefinedVariable = undefined;
	const nullVariable = null;
	const arrayVariable = [0, 1, 2, 3, 4, 5];
	const objectVariable = { chave: 'valor'};

// Trabalhando com arrays:
  const myFirstArray = ['valor01', 'valor02'];
    // Adicionando valores novos ao Array:
      // Na ultima posição:
        myFirstArray.push('valor03');
        console.log(myFirstArray); // -> ['valor01', 'valor02', 'valor03']
    // Acessar valores em Arrays:
      // Usando o índice dos valores:
        console.log(myFirstArray[0]); // -> valor01
    // Atualizando posições já existentes:
      myFirstArray[0] = 'novoValorDoIndex0'
      console.log(myFirstArray); // -> ['novoValorDoIndex0', 'valor02', 'valor03']
    // Removendo valores do Array:
      // Da ultima posição:
        myFirstArray.pop();
        console.log(myFirstArray); // -> ['novoValorDoIndex0', 'valor02']
    // Outros métodos:
      // Verificando número de dados do Array:
        console.log(myFirstArray.length); // -> 2

// Trabalhando com objetos:
  const myFirstObject = {chave01: 'valor01', chave02: 'valor02'};
    // Adicionando valores em objetos:
      // Método 01:
        myFirstObject.chave03 = 'valor03';
        console.log(myFirstObject); // -> { chave01: 'valor01', chave02: 'valor02', chave03: 'valor03' }
      // Método 03:
    		myFirstObject['chave04'] = 'valor04';
    		console.log(myFirstObject); // -> { chave01: 'valor01', chave02: 'valor02', chave03: 'valor03', chave04: 'valor04' }
    // Acessar valores em objetos:
    	// Método 01:
    		console.log(myFirstObject.chave01); // -> valor01
    	// Método 02:
    		console.log(myFirstObject['chave02']); // -> valor02
		// Atualizando uma chave já existente:    
    	// Método 01:
    		myFirstObject.chave01 = 'novoValor01';
    		console.log(myFirstObject); // -> { chave01: 'novoValor01', chave02: 'valor02', chave03: 'valor03', chave04: 'valor04'}
    	// Método 03:
    		myFirstObject['chave02'] = 'novoValor02';
    		console.log(myFirstObject); // -> { chave01: 'novoValor01', chave02: 'novoValor02', chave03: 'valor03', chave04: 'valor04' }
