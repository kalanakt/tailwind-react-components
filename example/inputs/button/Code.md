```js
import * as React from 'react';
import { Button } from '@vwjs/react'

export default function BasicButtons() {
  return (
    <div>
      <Button title="Hi I'm Vw." link="/" />
      <Button title="Hi I'm VwVw. " style="danger" disable={true}>
      <Button title="Hi I'm VwVwVw." link="/" style="mt-2 px-4 bg-red-300" animation="jump">
    </div>
  );
}
```
