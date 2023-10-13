export function Page1({state, setState}){
    return <div>
        <h1>I Am Page 1</h1>
        <button onClick={() => setState({page: "page2"})}>Page 2</button>
    </div>
}