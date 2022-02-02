import React, { useState } from 'react';
import  FirstChild  from './firstChild';
import  SecondChild  from './secondChild';

const Parent:React.FC = () => {
    const [parentName, setParentName] = useState<string>('John Obi')

    return (
         <div>
           <FirstChild name={parentName} />
           <SecondChild name={parentName} />
         </div>
      )
    }

    export default Parent;