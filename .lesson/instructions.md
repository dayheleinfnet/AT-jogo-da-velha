<p align="center">
    <img src="https://www.infnet.edu.br/infnet/wp-content/themes/infnet.homepage//assets/img/LogoInfnetRodape.png"/>
</p>

# Assessment

## Visão Geral

O seu trabalho final para o curso de **Programação Web com Java Script I** começa agora. Neste, será construído um trabalho que se concluirá na implementação de um jogo muito famoso, o _jogo da velha_.

Cada tarefa completa o resultado final para que, no fim, se tenha o produto desejado. Protanto, faça cada uma das tarefas com atenção e bom trabalho.

## Crie um _Jogo da Velha WEB_.

Neste jogo, um dos jogadores escolhe uma _casa_ entre nove disponíveis, e a casa é marcada com um círculo.
Em seguida, o outro jogador escolhe outra _casa_ entre as oito ainda disponíveis, marcando-a com um X.

As jogadas são alternadas até que uma linha com os mesmos símbolos seja formada, na vertical, horizontal ou diagonal.
O jogador que completar a linha, vence o jogo.

Este jogo deve apresentar um tabuleiro na página html contendo nove casas, cada qual, representando o tabuleiro do jogo. Pode ser usado botão, imagem, div ou qualquer outro elemento html de for mais conveniente.

A página deve indicar qual o jogador da vez.
O jogo também tem que indicar se a rodada deu _velha_

## Nível Bronze

### AT 1 - Arrumando o tabuleiro. (Bronze)

O tabuleiro do jogo já está pronto, mas não aparece como desejado. Mas não se preocupe, as classes _css_ já estão prontas, basta você usá-las no html.

### AT 2 - Indicando possível interação com o tabuleiro. (Bronze)

Agora, é necessário que o jogador possa ter a ideia de que, ao passar o cursor por alguma casa do tabuleiro, ele possa estar confiante de que o mesmo possa ser clicado. Então, implemente uma classe css para que, quando o cursor do mouse passe por alguma casa, ela mude de cor e o icone do cursor fique como um _pointer_.

### AT 3 - Interagindo com o tabuleiro. (Bronze)

Uma vez que o usuário já tem a percepção de que pode interagir com cada casa do tabuleiro, implemente o evento de click para cada uma das casa, de forma que, ao ser clicada, uma das casas, que seja exibido um _alert_ indicando o número da casa clicada. Considere a primeira casa como a que está no canto esquerdo, na parte superior; a nona e última casa está no canto direito, na parte inferior.

### AT 4 - Marcando a casa selecionada. (Bronze)

Agora que o usuário pode selecionar uma casa, implemente, na função criada na tarefa anterior, o script necessário para preencher a casa selecionada com um X.

Lembre-se que é possível acessar o elemento clicado com a variável _event_, passada na chamada da função, no elemento html.
    
**Exemplo:**

_index.html_
```
  <span onclick=”marcarCasa(event, 1)” >
```

_script.js_

```
  function marcarCasa(event, numCasa){
    const elemento = event.target;
    //…
  }
```

### AT 5 - Marcando a casa selecionada com X ou O. (Bronze)

Agora que o usuário pode selecionar uma casa, implemente, na função criada na tarefa anterior, o script necessário para preencher a casa selecionada com um X ou um O, de acordo com o turno.

Lembre-se que é possível acessar o elemento clicado com a variável _event_, passada na chamada da função, no elemento html.

### AT 6 - Indicar o jogador da vez. (Bronze)

Como já podemos saber qual o marcador que será apresentado na casa clicada, agora podemos também indicar quem é o jogador da vez.

Use o _span_ com o id _sJogadorDaVez_ para indicar esta informação.

### AT 7 - Bloqueando a casa já marcada. (Bronze)

O jogador já pode marcar a casa, agora é necessário bloquear as casas que já foram marcadas. Complemente o algoritmo para permitir apenas que casas vazias possam ser marcadas.

_Você pode criar variáveis de controle para indicar se uma casa já está marcada ou não, usando o valor 0 para indicar uma casa vaga._

_Outra sugestão é usar um _switch_ para verificar a casa que está sendo clicada._

### AT 8 - Verificando vitória em linha. (Bronze)

Agora é necessário verificar se alguma *linha* de casas foi preenchida por um mesmo jogador. Para isso, é importante que a casa marcada guarde a informação do jogador que marcou a mesma.

_Uma dica é usar o número 1 para o primeiro jogador e o número 2 para o segundo jogador._

_Então crie uma função que verifique se alguma *linha* do tabuleiro foi marcada pelo mesmo jogador_.

### AT 9 - Verificando vitória em coluna. (Bronze)

Agora é necessário verificar se alguma *coluna* de casas foi preenchida por um mesmo jogador. Para isso, é importante que a casa marcada guarde a informação do jogador que marcou a mesma.

_Aproveite as dicas do passo anterior._

### AT 10 - Verificando vitória em diagonal. (Bronze)

Agora é necessário verificar se alguma *diagonal* de casas foi preenchida por um mesmo jogador. Para isso, é importante que a casa marcada guarde a informação do jogador que marcou a mesma.

_Aproveite as dicas do passo anterior._

## Nível Prata

### AT 11 - Verificar se deu velha. (Prata)

Agora é necessário verificar se o jogo terminou, mas nenhum jogador conseguiu fechar uma linha, coluna ou diagonal. Faça uma função para verificar esta situação e, caso afirmativo, indicar que deu velha.

_Aproveite as dicas anteriores._

### AT 12 - Verificar qual jogador ganhou, caso haja um. (Prata)

Se você não apresentou o jogador que ganhou manipulando o elemento no DOM, faça isso agora. Crie um elemento no HTML para exibir esta informação.

### AT 13 - Reiniciar o jogo. (Prata)

Agora precisamos reiniciar o jogo sempre que houver um ganhador ou der velha.

Faça uma função para isso e implemente um botão para acionar a mesma quando o usuário quiser reiniciar a partida.

### AT 14 - Pontuar ganhador. (Prata)

Para ficar mais interessante, apresente um placar pontuando os jogadores de acordo com a quantidade de vitórias.

### AT 15 - Pontuar mais o ganhador que fechou com até 4 jogadas. (Prata)

Para ficar mais desafiador, pontue com mais pontos o jogador que fechou a partida com até 4 jogadas.

## Nível Outro

### AT 16 - Travando o tabuleiro quando a partida acabar. (Ouro)

Implemente um mecanismo para bloquear o tabuleiro quando a partida acabar.

### AT 17 - Exibindo o tempo da partida. (Ouro)

Exiba, ao final da partida, o tempo de duração da mesma.

### AT 18 - Exibindo o melhor tempo. (Ouro)

Exiba, na página, o melhor tempo já realizado e o jogador que fez aquele tempo. Não considere quando a partida deu velha.

### AT 19 - Conectar o projeto no GitHub. (Ouro)

Suba o seu projeto no GitHub.

### AT 20 - Funções com até 15 sentenças. (Ouro)

Para completar o desafio, refatore as suas funções para que nenhuma delas tenha mais do que 15 sentenças de comando.

Crie novas funções se for necessário.

Além disso, fora de funções, somente podem haver declarações de variáveis, nenhuma outra implementação pode ser feita sem estar no escopo de uma função.
