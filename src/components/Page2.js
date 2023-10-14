export function Page2({state, setState}){
    return <div>
        <h1>I Am Page 2</h1>
        <button onClick={() => setState({page: "page1"})}>Page 1</button>
    </div>
}