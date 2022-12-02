function cria_matriz_zeros(n, m)
{
	var mat = Array(n);
	for(var i = 0; i < n; i++)
	{
		mat[i] = Array(m);
	}
	//Percebam que repetimos um 'for'. Será que não daria para fazer tudo acima desta linha?
	for(var i = 0; i < n; i++)
	{
		for(var j = 0; j < m; j++)
		{
			mat[i][j] = 0;
		}
	}
	return mat;
}

function imprime_matriz(mat, paragrafo)
{
	var s = ""; //String, ou cadeia de símbolos/caracteres
	var n = mat.length; //Cada array/vetor tem um tamanho. 'length' é 'comprimento'.
	var m = mat[0].length; //Como usamos a função cria_matriz_zeros de maneira que toda "coluna" tenha o mesmo tamanho, basta pegar o tamanho da coluna 0. Observe que estou pegando o 'length' de um array: do array mat[0].
	for(var i = 0; i < n; i++)
	{
		for(var j = 0; j < m; j++)
		{
			s += mat[i][j] + " "; //s = s + mat[i][j] + " ";
		}
		s += "<br>"; //Leia abaixo o PS! :)
	}
	document.getElementById(paragrafo).innerHTML = s; //Aqui, pegamos o id de um parágrafo e jogamos toda a matriz, armazenada como string em 's', e colocamos no conteúdo HTML do parágrafo.
}

//PS: Vocês (não lembro quem) que me sugeriram colocar <br> em aula estavam certos! A quebra de linha de JavaScript é, de fato, '\n'; porém, neste contexto, a nossa string 's' iria ser "colada" no conteúdo HTML do parágrafo, e como <br> quebra linhas no html... (É como se o conteúdo da string fosse "digitada" no nosso código HTML).
