const ComponentDetails=({component})=>{
return(
    <div class="component-details">
        <h4>{component.type}</h4>
        <p><strong>Brand:</strong>{component.brand}</p>
        <p><strong>Model:</strong>{component.model}</p>
        <p>{component.createdAt}</p>

    </div>
)
}
export default ComponentDetails