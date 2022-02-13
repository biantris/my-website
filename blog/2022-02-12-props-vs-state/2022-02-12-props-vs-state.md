---
slug: props-vs-state
title: Fundamentos do React - Props vs State
authors: [biantris]
tags: [react, fundamentals]
---

![banner image](./img/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg)
Photo by <a href="https://unsplash.com/@lautaroandreani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lautaro Andreani</a> on <a href="https://unsplash.com/s/photos/react?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

> Este artigo é uma tradução pt-BR do artigo [React Fundamentals: Props vs State](https://kentcdodds.com/blog/props-vs-state) por Kent C. Dodds.

## TL;DR

Vamos comparar props e state. Aqui está uma definição para cada um:

- **"props"** ( abreviação de "properties" ) é um objeto de entradas arbitrárias que um componente de função do
  React aceita como o primeiro argumento.

- **"state"** são dados que mudam ao longo do tempo de vida de uma instância específica de um componente React.

Vamos nos aprofundar em cada um.

## Props

Pense nas props como argumentos para uma função. Componentes React são funções que retornam JSX ( ou mais, geralmente algo que é renderizável
como elementos React, `null`, uma string, etc.). Normalmente, quando você tem um pedaço de código que gostaria de reutilizar, você pode colocar
esse código em uma função e quaisquer valores dinâmicos usado anteriormente podem ser aceitos como argumentos ( por exemplo `const five = 2 + 3`,
pode ser extraído para uma função e aceitar como `const five = add(2, 3)` ).

O mesmo vale para um código JSX, exceto quando em vez de chamá-lo como uma função normal ( `add(2, 3)` )
você usa a sintaxe JSX ( `<Add n1={2} n2={3} />` ). Os "atributos" fornecidos no JSX são chamados de `props` e são colocados
juntos em um único objeto e passados para a função do componente `Add` como primeiro argumento da seguinte forma:

```tsx
function Add(props) {
  return (
    <div>
      {props.n1} + {props.n2} = {props.n1 + props.n2}
    </div>
  );
}
```

Se eu fosse usar isto dessa forma:

```tsx
<Add n1={2} n2={3} />
```

Veja como isso seria renderizado:

```
2 + 3 = 5
```

:::note
As props podem ser qualquer coisa. Nesse exemplo, elas são números, mas também podem ser ( e geralmente são ) strings, arrays, objetos, funções, etc.
:::

Digamos que queremos usar o padrão `n2` para `0` caso alguém não o forneça. ( como `<Add n1={2} />` ). **Uma regra das props é que você não tem permissão para alterá-los**. Logo, você não poderia fazer algo assim:

```tsx
function Add(props) {
  if (typeof props.n2 === "undefined") {
    props.n2 = 0;
  }
  return (
    <div>
      {props.n1} + {props.n2} = {props.n1 + props.n2}
    </div>
  );
}
```
Se tentarmos fazer isso, obteremos o seguinte erro:

```
TypeError: Cannot add property n2, object is not extensible
```

Mas isto é simples o suficiente para resolver:

```tsx
function Add(props) {
  let n2 = props.n2
  if (typeof n2 === 'undefined') {
    n2 = 0
  }
  return (
    <div>
      {props.n1} + {n2} = {props.n1 + n2}
    </div>
  )
}
```

Ou, muitas vezes, você encontrará pessoas que usam sintaxe de desestruturação com valores padrão também (essa é minha preferência pessoal):

```tsx
function Add({n1, n2 = 0}) {
  return (
    <div>
      {n1} + {n2} = {n1 + n2}
    </div>
  )
}
```

Isso é incrível, mas se eu quiser alterar dinamicamente o valor das props? Digamos que eu queira construir algo assim:

![Input image](./img/input-ex.png)

Sem estado, podemos fazer assim:

```tsx
function AddWithInput(props) {
  function handleInputChange(event) {
    const input = event.target
    const newN2 = Number(input.value)
    props.n2 = newN2
  }
  return (
    <div>
      {props.n1} +{' '}
      <input type="number" value={props.n2} onChange={handleInputChange} /> ={' '}
      {props.n1 + props.n2}
    </div>
  )
}
```
No entanto, isso não funcionará por dois motivos:

1. O React não sabe que atualizamos o valor do `n2` do nosso objeto `props`, então ele não atualizará a DOM quando mudarmos `props.n2`,
logo, não veremos nossas alterações de qualquer maneira;
2. Receberemos o aviso `TypeError` como anteriormente.

É ai que entra o state(estado).

## State
Estados são dados que mudam ao longo do tempo, e isso é perfeito para nossa situação: