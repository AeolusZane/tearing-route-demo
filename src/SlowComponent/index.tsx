import { useEffect, useState, startTransition, useDeferredValue } from "react";

let externalState = { counter: 0 };
let listeners: any[] = [];

function dispatch(action: { type: any }) {
    if (action.type === "increment") {
        externalState = { counter: externalState.counter + 1 };
    } else {
        throw new Error("unknown action");
    }
    listeners.forEach(listener => listener());
}

function subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
        listeners = listeners.filter(l => l !== listener);
    };
}

function useExternalData() {
    let [data, setData] = useState(externalState);
    useEffect(() => {
        let unsubscribe = subscribe(() => setData(externalState));
        return unsubscribe;
    }, []);
    return data;
}

function SlowComponent() {
    let now = Date.now();
    const data = useExternalData();
    const value = useDeferredValue(data);
    while (Date.now() - now < 200) {
        // Artificial delay -- do nothing for 0.2 seconds
    }
    return <h3>Counter:{value.counter}</h3>
}
// setInterval(() => {
//     dispatch({ type: "increment" });
// },50);

export default function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <button onClick={() => startTransition(() => setShow(!show))}>show</button>
            <button onClick={() => {
                // setAtomData((v) => v + 1);
                startTransition(() => dispatch({ type: "increment" }));
            }}>ADD</button>
            <input onInput={(e)=>{
                startTransition(() => dispatch({ type: "increment" }));
                // dispatch({ type: "increment" });
            }}></input>
            {show && <>
                <SlowComponent />
                <SlowComponent />
                <SlowComponent />
                <SlowComponent />
                <SlowComponent />
                <SlowComponent />
            </>}
        </div>)
}
