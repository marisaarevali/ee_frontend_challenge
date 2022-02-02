import { useEffect } from "react";
import { useState } from "react";


interface IfirstChildProps {
    name: string
}

const FirstChild: React.FC<IfirstChildProps> = ({ name }) => {
    const [firstChildName, setFirstChildName] = useState<string>('')

    useEffect(() => {
        setFirstChildName(name)
      },[name])
    return (
        <section>
            <h1> {firstChildName} </h1>
            <button> first child </button>
        </section>
    )
}
export default FirstChild;