import  { useState } from 'react';
import { useEffect } from "react";

interface IsecondChildProps {
    name: string
}
const SecondChild: React.FC<IsecondChildProps> = ({ name }) => {
    const [secondChildName, setSecondChildName] = useState<string>('')
    useEffect(() => {
        setSecondChildName(name)
    }, [name])
    return (
        <section>
            <h1> {secondChildName} </h1>
            <button>second child</button>
        </section>
    )
}
export default SecondChild;