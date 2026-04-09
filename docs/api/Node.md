```javascript
new Node()
```
Node is a base class for Blocks. 

## Methods
### addChild
Adding new node childs to parent node.

```javascript
addChild(...node)
```

**Parameters**

* **node** : `Node[]`

**Returns**

* **addChild** : void

---

### removeChild
Removes a child node from parent node.

```javascript
removeChild(child)
```

**Parameters**

* **child** : `Node`

**Returns**

* **removeChild** : void

---

### listAllChilds
Listing every child for callback function `_func`

```javascript
listAllChilds(_func)
```

**Parameters**

* **_func**: `<T>(element: T) => void`

**Returns**

* **listAllChilds** : void


---

### listOnlyChild
Listing only parent childs in sort for callback function `_func`. Depends on `resetSort` for every time to be sorted.

```javascript
listOnlyChild(_func, sort, nodes)
```

**Parameters**

* **_func**: `(element: B, currIdx: number, arrLen: number) => void`
* **sort**: string | undefined
* **nodes**: Node[] | undefined

**Returns**

* **listOnlyChild** : void

---

### resetSort
Resets sorting for childs.

```javascript
resetSort()
```

**Parameters**


**Returns**

* **resetSort** : void
