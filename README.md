![Tree](./header.png)

<sup>_Social Media Photo by [Andrew Ridley](https://unsplash.com/@aridley88) on [Unsplash](https://unsplash.com/photos/ER6_i8FhQIw)_</sup>

# Browser Element Focus

<p align="center">
  <img alt="Formato de exportación: UMD, CJS, ESM" src="https://img.shields.io/badge/fomat-umd%20cjs%20esm-yellowgreen" />
  <img alt="Distribución: Npm, Unpackage" src="https://img.shields.io/badge/%F0%9F%93%A6-npm%20unpk-yellowgreen" />
  <img alt="Licencia: GPL 3.0" src="https://img.shields.io/badge/GPL 3.0-license-yellowgreen" />
</p>

## Uso

Esta es una librería con utilidades para gestionar el foco de los elementos en el navegador.

**Npm**
```sh
npm install --save browser-element-focus
```

**Unpkg**
```javascript
import {findFocusableElement} from 'https://unpkg.com/browser-element-focus?module'
```

## API

* getFocusableWalker()
* findFocusableElement()
* isFocusable()

## # getFocusableWalker()
### _Sintaxis_
```javascript
getFocusableWalker(rootElement);
```
### _Parámentros_
* **rootElement**: Nodo raiz, que hereda de HTMLElement, en el que se iniciará la búsqueda.
### _Valor devuelto_
Devuelve un objeto [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)

## # findFocusableElement()
### _Sintaxis_
```javascript
findFocusableElement(rootElement);
```
### _Parámentros_
* **rootElement**: Nodo raiz, que hereda de HTMLElement, en el que se iniciará la búsqueda.
### _Valor devuelto_
Devuelve el primer nodo encontrado, que pueda obtener el foco, o `undefined` en caso de no encontrar ninguno.

## # isFocusable()
### _Sintaxis_
```javascript
isFocusable(nodeElement);
```
### _Parámentros_
* **nodeElement**: Nodo que hereda de HTMLElement
### _Valor devuelto_
Verdadero/Falso en función de si el elemento es o no un elemento que puede obtener el foco



## __Enlaces de Interes__

* [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)
* [TreeWalker Polyfill](https://gist.github.com/kindy/eb7e2581265fb80aae11ab50f668ec20)