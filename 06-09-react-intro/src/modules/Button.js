export default function Button() {
    function greeting() {
        alert('Hello!')
    }

    return(
        <button onClick={greeting}>Click me!</button>
    )
}