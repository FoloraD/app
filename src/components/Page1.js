export function Page1({state, setState}){
    return <div>
      
        <button onClick={() => setState({page: "page2"})}>Page 2</button>
    </div>
}
