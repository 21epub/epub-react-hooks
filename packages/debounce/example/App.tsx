import React from 'react'

import { ExampleComponent } from '../src'

const App = () => {
  return <ExampleComponent text='Create React TS Parcel Library Example 😄' />
}

export default App

// TODO: full example

// import {useState} from 'react';
// import {useDebouncedCallback} from '@huse/debounce';

// const [list, setList] = useState([]);

// // invokes after 200ms wait
// const search = useDebouncedCallback(
//     async e => {
//         const items = await findByKeyword(e.target.value);
//         setList(items);
//     },
//     200
// );

// import React, {useState} from 'react';
// import {Button, Input} from 'antd';
// import 'antd/dist/antd.min.css';
// import {useDebouncedValue, useDebouncedEffect, useDebouncedCallback} from '@huse/debounce';

// export default () => {
//     const [value, setValue] = useState('');
//     const debouncedValue = useDebouncedValue(value, 200); // debounced update 200ms
//     return (
//         <>
//             <div>
//                 <Input value={value} onChange={e => setValue(e.target.value)} />
//             </div>
//             <div>
//                 Current Value: {debouncedValue}
//             </div>
//         </>
//     );
// };

// import React, {useState} from 'react';
// import {Button, Input} from 'antd';
// import 'antd/dist/antd.min.css';
// import {useDebouncedValue, useDebouncedEffect, useDebouncedCallback} from '@huse/debounce';

// export default () => {
//     const [value, setValue] = useState('');
//     const [message, setMessage] = useState('');
//     useDebouncedEffect(
//         () => {
//             value && setMessage(`Value updated to ${value}`);
//         },
//         value,
//         200
//     );
//     return (
//         <>
//             <div>
//                 <Input value={value} onChange={e => setValue(e.target.value)} />
//             </div>
//             <div>
//                 {message}
//             </div>
//         </>
//     );
// };
